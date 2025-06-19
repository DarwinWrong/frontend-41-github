export class ConsoleLogger {
  log(errorText) {
    console.error(errorText);
  }
}

export class AlertLogger {
  log(errorText) {
    alert(errorText);
  }
}

export class DomLogger {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
  }

  log(errorText) {
    if (this.container) {
      const errorEl = document.createElement('div');
      errorEl.textContent = errorText;
      errorEl.style.color = 'red';
      this.container.appendChild(errorEl);
    }
  }
}
