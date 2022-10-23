/* eslint-disable no-console */
import { program } from 'commander';
import { permuteAPalindrome } from './palindromChecker';

program
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .option('-w, --word <value>', 'Word for check.')
  .parse(process.argv);

const options = program.opts();

const result = permuteAPalindrome(options.word);
if (result) {
  console.log('Your word is palindrome');
} else {
  console.log('Your word is not palindrome');
}
