let id = 0;

export default function (pre: string = ''): string {
  id++;
  return pre + '_' + id;
}