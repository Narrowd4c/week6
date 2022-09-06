if (document.querySelector('#date')) {
    const date = document.querySelector('#date');
    const datepicker = new Datepicker(date, {
        autohide: true,
        language: 'zh-TW'
  });
}