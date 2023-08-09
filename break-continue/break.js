let count = 1;

while (true) {
  document.writeln(`<p>${count}. Hallo</p>`);
  count++;

  if (count > 2) {
    break;
  }
}
