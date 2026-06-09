#!/usr/bin/env node

import { program } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { readFileSync, existsSync, mkdirSync, writeFileSync, cpSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const SKILLS_REPO = 'https://raw.githubusercontent.com/ydavidtimothy-spec/skills/main';
const AGENT_DIRS = {
  '.opencode/skills': '.opencode/skills',
  '.claude/skills': '.claude/skills',
  '.commandcode/skills': '.commandcode/skills',
  '.reasonix/skills': '.reasonix/skills',
  '.agents/skills': '.agents/skills',
};

const AVAILABLE_SKILLS = [
  {
    name: 'teach',
    description: 'Teach the user a new skill or concept with persistent learning records',
  },
  {
    name: 'to-issues',
    description: 'Break plans, specs, or PRDs into independently-grabbable issues',
  },
  {
    name: 'write-a-skill',
    description: 'Create new agent skills with proper structure and progressive disclosure',
  },
];

program
  .name('skills')
  .description('Install David Timothy\'s agent skills into your project')
  .version(pkg.version);

program
  .command('add')
  .description('Interactively add skills to your project')
  .argument('[repo]', 'GitHub repo to install from (optional)')
  .action(async (repo) => {
    console.log(chalk.bold.cyan('\n  ⚡ skills installer\n'));
    console.log(chalk.dim('  Pick the skills you want, and which coding agents to install them on.\n'));

    // Step 1: Choose skills
    const { selectedSkills } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedSkills',
        message: 'Which skills do you want to install?',
        choices: AVAILABLE_SKILLS.map((s) => ({
          name: `${s.name} — ${s.description}`,
          value: s.name,
          checked: true,
        })),
        validate: (answer) => answer.length > 0 || 'Select at least one skill.',
      },
    ]);

    // Step 2: Choose agent harness directories
    const { selectedDirs } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedDirs',
        message: 'Which agent harness directories should receive these skills?',
        choices: Object.entries(AGENT_DIRS).map(([key, val]) => ({
          name: `${key}/`,
          value: val,
          checked: key === '.opencode/skills' || key === '.agents/skills',
        })),
        validate: (answer) => answer.length > 0 || 'Select at least one directory.',
      },
    ]);

    // Step 3: Confirm and install
    console.log(chalk.dim('\n  ─────────────────────────────────────────────\n'));
    console.log(chalk.bold('  Installing:'));
    selectedSkills.forEach((s) => console.log(`  • ${chalk.cyan(s)}`));
    console.log(chalk.bold('\n  Into:'));
    selectedDirs.forEach((d) => console.log(`  • ${chalk.yellow(d)}/`));

    console.log('');
    const { confirmed } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmed',
        message: 'Proceed with installation?',
        default: true,
      },
    ]);

    if (!confirmed) {
      console.log(chalk.dim('\n  Installation cancelled.\n'));
      process.exit(0);
    }

    // Install
    let installed = 0;
    let failed = 0;

    for (const dir of selectedDirs) {
      const targetDir = join(process.cwd(), dir);

      if (!existsSync(targetDir)) {
        mkdirSync(targetDir, { recursive: true });
        console.log(chalk.dim(`  Created ${dir}/`));
      }

      for (const skill of selectedSkills) {
        const targetPath = join(targetDir, skill);
        const url = `${SKILLS_REPO}/${skill}/SKILL.md`;

        if (!existsSync(targetPath)) {
          mkdirSync(targetPath, { recursive: true });
        }

        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP ${response.status}`);

          const content = await response.text();
          writeFileSync(join(targetPath, 'SKILL.md'), content);
          console.log(`  ${chalk.green('✓')} ${skill} → ${dir}/${skill}/`);
          installed++;
        } catch (err) {
          console.log(`  ${chalk.red('✗')} ${skill} → ${dir}/${skill}/ ${chalk.dim('(download failed)')}`);
          console.log(chalk.dim(`    ${err.message}`));
          failed++;
        }
      }
    }

    console.log(chalk.dim('\n  ─────────────────────────────────────────────\n'));
    console.log(chalk.bold.green(`  ✅ ${installed} skill${installed !== 1 ? 's' : ''} installed`));
    if (failed > 0) {
      console.log(chalk.yellow(`  ⚠️  ${failed} download${failed !== 1 ? 's' : ''} failed`));
    }
    console.log(chalk.dim('\n  You can now use /<skill-name> in your agent.\n'));
  });

program
  .command('list')
  .description('List available skills')
  .action(() => {
    console.log(chalk.bold.cyan('\n  Available skills:\n'));
    AVAILABLE_SKILLS.forEach((s) => {
      console.log(`  ${chalk.cyan(s.name.padEnd(20))} ${chalk.dim(s.description)}`);
    });
    console.log('');
  });

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
