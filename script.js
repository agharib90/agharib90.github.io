const terminal = document.getElementById("terminal");

const commands = [
  {
    cmd: "whoami",
    output: "Masy — Senior IT Officer"
  },
  {
    cmd: "cat profile.txt",
    output: "Infrastructure • Networks • Automation • Security • Reliability"
  },
  {
    cmd: "ls skills/",
    output: `
      <div class="grid">
        <span>Active Directory</span>
        <span>Linux Servers</span>
        <span>Docker</span>
        <span>Networking</span>
        <span>Firewalls</span>
        <span>Backups & DR</span>
        <span>PowerShell</span>
        <span>Python</span>
      </div>`
  },
  {
    cmd: "ls projects/",
    output: `
      • Device Monitoring System<br>
      • IT Self-Help Automation Tool<br>
      • Enterprise Network & WiFi Upgrades`
  },
  {
    cmd: "contact --show",
    output: `
      GitHub: <a href="https://github.com/masy0325" target="_blank">github.com/masy0325</a><br>
      Email: masy.it@proton.me`
  }
];

let index = 0;

function typeCommand(text, callback) {
  let i = 0;
  const line = document.createElement("div");
  line.className = "line";
  line.innerHTML = `<span class="prompt">root@masy:</span> <span class="path">~</span>$ `;
  terminal.appendChild(line);

  const interval = setInterval(() => {
    line.innerHTML += text[i];
    i++;
    if (i === text.length) {
      clearInterval(interval);
      callback();
    }
  }, 50);
}

function showOutput(html) {
  const out = document.createElement("div");
  out.className = "output fade";
  out.innerHTML = html;
  terminal.appendChild(out);
}

function runNext() {
  if (index >= commands.length) return;

  typeCommand(commands[index].cmd, () => {
    setTimeout(() => {
      showOutput(commands[index].output);
      index++;
      setTimeout(runNext, 600);
    }, 400);
  });
}

runNext();
