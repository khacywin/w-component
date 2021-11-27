let id = 0;

export default function (pre = 'input'): string {
  id++;
  return pre + '_' + id;
}