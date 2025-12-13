// collect-project.mjs
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname);
const OUTPUT_FILE = path.join(__dirname, 'project-content.txt');

// Файлы и папки которые нужно игнорировать
const IGNORE_PATTERNS = [
	'node_modules',
	'dist',
	'build',
	'.git',
	'.vscode',
	'.idea',
	'coverage',
	'.tmp',
	'package-lock.json',
	'yarn.lock',
	'pnpm-lock.yaml',
	'project-content.txt',
];

// Расширения файлов которые нужно включить
const INCLUDED_EXTENSIONS = [
	'.ts',
	'.tsx',
	'.js',
	'.jsx',
	'.json',
	'.html',
	'.scss',
	'.css',
	'.md',
	'.txt',
	'.mjs',
	'.cjs',
];

// Функция для удаления комментариев из разных типов файлов
function removeComments(content, filePath) {
	const ext = path.extname(filePath);

	switch (ext) {
		case '.ts':
		case '.tsx':
		case '.js':
		case '.jsx':
		case '.mjs':
		case '.cjs':
			// Удаление однострочных и многострочных комментариев
			return content
				.replace(/\/\*[\s\S]*?\*\//g, '')
				.replace(/\/\/.*$/gm, '')
				.trim();

		case '.scss':
		case '.css':
			// Удаление CSS/SCSS комментариев
			return content
				.replace(/\/\*[\s\S]*?\*\//g, '')
				.replace(/\/\/.*$/gm, '')
				.trim();

		case '.html':
			// Удаление HTML комментариев
			return content.replace(/<!--[\s\S]*?-->/g, '').trim();

		case '.json':
			// JSON не имеет комментариев в стандарте, но удаляем возможные
			return content
				.replace(/\/\*[\s\S]*?\*\//g, '')
				.replace(/\/\/.*$/gm, '')
				.trim();

		default:
			return content.trim();
	}
}

// Функция для проверки нужно ли игнорировать файл/папку
function shouldIgnore(filePath) {
	const relativePath = path.relative(PROJECT_ROOT, filePath);
	const name = path.basename(filePath);

	return IGNORE_PATTERNS.some(
		(pattern) => relativePath.includes(pattern) || name === pattern
	);
}

// Функция для проверки нужно ли включить файл
function shouldInclude(filePath) {
	if (fs.statSync(filePath).isDirectory()) return false;

	const ext = path.extname(filePath);
	return INCLUDED_EXTENSIONS.includes(ext);
}

// Рекурсивное чтение директории
function readDirectory(dirPath, fileList = []) {
	const items = fs.readdirSync(dirPath);

	for (const item of items) {
		const fullPath = path.join(dirPath, item);

		if (shouldIgnore(fullPath)) continue;

		if (fs.statSync(fullPath).isDirectory()) {
			readDirectory(fullPath, fileList);
		} else if (shouldInclude(fullPath)) {
			fileList.push(fullPath);
		}
	}

	return fileList;
}

// Основная функция
function collectProject() {
	console.log('🔍 Сбор файлов проекта...');

	const allFiles = readDirectory(PROJECT_ROOT);
	console.log(`📁 Найдено файлов: ${allFiles.length}`);

	let outputContent = `# PROJECT CONTENT COLLECTION\n`;
	outputContent += `# Generated: ${new Date().toISOString()}\n`;
	outputContent += `# Total files: ${allFiles.length}\n\n`;
	outputContent += '='.repeat(80) + '\n\n';

	for (const filePath of allFiles) {
		try {
			const relativePath = path.relative(PROJECT_ROOT, filePath);
			const content = fs.readFileSync(filePath, 'utf8');
			const contentWithoutComments = removeComments(content, filePath);

			outputContent += `FILE: ${relativePath}\n`;
			outputContent += '─'.repeat(80) + '\n\n';
			outputContent += contentWithoutComments + '\n\n';
			outputContent += '─'.repeat(80) + '\n\n';

			console.log(`✅ Обработан: ${relativePath}`);
		} catch (error) {
			console.log(`❌ Ошибка при обработке: ${filePath}`, error.message);
		}
	}

	outputContent += '='.repeat(80) + '\n';
	outputContent += '# END OF PROJECT CONTENT\n';

	// Запись в файл
	fs.writeFileSync(OUTPUT_FILE, outputContent, 'utf8');
	console.log(`\n📄 Проект собран в: ${OUTPUT_FILE}`);
	console.log(
		`📊 Размер файла: ${(
			Buffer.byteLength(outputContent, 'utf8') /
			1024 /
			1024
		).toFixed(2)} MB`
	);
}

// Запуск
collectProject();
