// All project case-study content lives here, separate from index.html.
// Modals are built on demand in script.js — this keeps the initial DOM small
// and makes it trivial to add/edit a project without touching markup.

const PROJECTS = {

  "modal-aqm": {
    title: "Air Quality Monitoring (AQM) Devices",
    type: "Work-Related · Internship",
    year: "2024 – 2025",
    tech: ["C++", "E-paper Display", "IoT"],
    repo: { label: "Not publicly available" },
    body: `
      <h4>Project Overview</h4>
      <p>Developed C++ software for e-paper displays and carried out regular maintenance of AQM devices to ensure accurate and reliable performance during the internship period.</p>
    `
  },

  "modal-ble": {
    title: "QR Code Scanning — BLE Self-Payment System",
    type: "Work-Related · Internship",
    year: "2024 – 2025",
    tech: ["BLE", "QR Code", "Flutter"],
    repo: { label: "Not publicly available" },
    body: `
      <h4>Project Overview</h4>
      <p>Implemented BLE-based self-payment systems, enabling secure and efficient QR code scanning for seamless transaction processing without requiring active client internet infrastructure.</p>
    `
  },

  "modal-bpe": {
    title: "Automation of BPE Folding Machine",
    type: "Work-Related · Industrial Automation",
    year: "2025 – 2026",
    tech: ["Omron CP1E", "CX Programmer", "Pneumatics", "Kinco HMI", "RS-232"],
    repo: { label: "Proprietary / Internal" },
    body: `
      <h4>Problem</h4>
      <ul>
        <li>The BPE (Body Protective Equipment) folding process was heavily dependent on manual labour.</li>
        <li>Manual folding resulted in lower efficiency, inconsistent output, and higher labour requirements.</li>
        <li>The Global Engineering and Manufacturing Technology Department identified the need for an automated folding mechanism.</li>
        <li>No previous machine designs existed, so the system had to be built from scratch.</li>
      </ul>
      <h4>Solution &amp; Outcome</h4>
      <ul>
        <li>Worked on the project from the concept stage through to completion.</li>
        <li>Helped design the mechanical system and supported prototype building and assembly.</li>
        <li>Developed the control system using an Omron CP1E PLC and CX Programmer.</li>
        <li>Added a soft-start pneumatic valve to pressurise the system and improve startup safety.</li>
        <li>Installed and wired limit switches for the BPE folding bed.</li>
        <li>Installed pneumatic tubing between valves and actuators for the folding system.</li>
        <li>Installed 20 reed switches across 10 pneumatic actuators, connected to PLC inputs for position monitoring.</li>
        <li>Set up RS-232 communication between the PLC and HMI.</li>
        <li>Designed and programmed the HMI using Kinco HMI Ware, including Auto/Manual modes, Start/Stop, Home position, and Emergency Stop.</li>
        <li>Performed testing, troubleshooting, and final commissioning of the machine.</li>
      </ul>
    `
  },

  "modal-reverse": {
    title: "Reverse Engineering of Industrial Components and Systems",
    type: "Work-Related · Mechanical Design",
    year: "2025 – 2026",
    tech: ["SolidWorks", "CAD Layouts", "Calculations"],
    repo: { label: "Proprietary / Internal" },
    body: `
      <h4>Ven Pack Machine</h4>
      <ul>
        <li>Reverse-engineered the frame of an existing Ven Pack machine.</li>
        <li>Took precise measurements from the real machine to recreate the frame design.</li>
        <li>Verified sheet metal coverings against the designed frame to ensure correct dimensions.</li>
        <li>Developed accurate drawings and layouts based on collected data.</li>
      </ul>
      <h4>Linear Actuator Setup</h4>
      <ul>
        <li>Reverse-engineered an existing linear actuator setup.</li>
        <li>Took measurements to understand actuator dimensions and motor placement.</li>
        <li>Designed a motor mounting bracket based on the actuator geometry.</li>
        <li>Conducted lead screw calculations for motor selection.</li>
      </ul>
    `
  },

  "modal-dobot": {
    title: "Cobot Programming — DOBOT CR12A",
    type: "Work-Related · Robotics",
    year: "2025 – 2026",
    tech: ["DOBOT CR12A", "PLC Integration", "Registers"],
    repo: { label: "Proprietary / Internal" },
    body: `
      <h4>Technical Scope</h4>
      <ul>
        <li>Programmed the Dobot robot using the teaching pendant, including tray functions for pick-and-place tasks.</li>
        <li>Created subroutines to handle repeated actions and simplify programming.</li>
        <li>Configured input/output signals between the robot and PLC for automated control.</li>
        <li>Used holding registers to send and receive data with the PLC.</li>
        <li>Performed testing, debugging, and final commissioning.</li>
      </ul>
    `
  },

  "modal-robocar": {
    title: "Microcontroller Project — Dual-Mode Robotic Car",
    type: "University · Microcontroller Coursework",
    year: "2025",
    tech: ["ESP32-CAM", "HC-05", "Robotics"],
    repo: { label: "Not publicly available" },
    body: `
      <h4>Project Overview</h4>
      <p>Designed and developed a dual-mode car capable of operating in both autonomous and manual control modes.</p>
      <h4>Autonomous Mode</h4>
      <p>Equipped with an ESP32-CAM module for visual input, the car navigates and solves mazes autonomously using embedded logic.</p>
      <h4>Manual Mode</h4>
      <p>Controlled wirelessly via Bluetooth (HC-05) using an external controller, enabling full user navigation in real time.</p>
      <h4>Technical Stack</h4>
      <ul>
        <li>Microcontrollers: ESP32-CAM, Arduino Mega</li>
        <li>Communication: HC-05 Bluetooth Module</li>
        <li>Programming Language: C</li>
        <li>Real-time data processing and control logic for maze-solving algorithms</li>
      </ul>
    `
  },

  "modal-linefollow": {
    title: "Line-Following Cart",
    type: "University · Control Systems",
    year: "2025",
    tech: ["Arduino Nano", "Analog Circuits", "Python GUI", "555 Timer"],
    repo: { label: "View on GitHub", url: "https://github.com/Hashin2003/Line-Following-Cart.git" },
    body: `
      <h4>Project Summary</h4>
      <p>An Arduino Nano based tracking cart combining real-time Bang-Bang control with a DAC + LM741 + LM339 + 555 Timer circuit for analog PWM generation, paired with a Python GUI for live control and sensor visualisation.</p>
      <p>Achieved smooth bidirectional motion, stable tracking, and responsive feedback — a hands-on integration of control theory and embedded electronics.</p>
    `
  },

  "modal-crazy-machine": {
    title: "Advanced Digital Design — Automated Crazy Machine",
    type: "University · Advanced Digital Design",
    year: "2025",
    tech: ["Altera DE1 FPGA", "VHDL", "FSM Design", "Arduino Mega", "SolidWorks", "3D Printing", "NEMA 17", "A4988", "IR Sensors"],
    repo: { label: "Coursework — not publicly hosted" },
    body: `
      <h4>Project Overview</h4>
      <p>Designed and developed a fully automated electromechanical Crazy Machine module that transports a steel ball through a themed bank-robbery sequence without human intervention. The system combines FPGA-based control, embedded systems, mechanical design, and automation to execute elevators, doors, vault mechanisms, and a final escape system. Controlled by an Altera FPGA running a VHDL-based finite state machine, with an Arduino Mega supporting additional I/O such as OLED display control and motor operation.</p>

      <h4>FPGA-Based Automation Control</h4>
      <ul>
        <li>Developed a complete autonomous control system using VHDL on an Altera FPGA development board.</li>
        <li>Implemented a finite state machine architecture to coordinate sensor inputs, timing sequences, and actuator outputs.</li>
        <li>Designed modular VHDL controllers for servo motors, stepper motors, elevators, doors, buzzer, and retrieval mechanisms.</li>
        <li>Used sensor feedback and timed state transitions to keep mechanisms in correct sequence.</li>
      </ul>

      <h4>Mechanical System Design</h4>
      <p>Designed and integrated a compact 40cm × 40cm × 40cm mechanical system: dual elevator mechanisms, servo-controlled doors, maze pathways, vault section, electromagnet retrieval mechanism, and a final DC motor escape mechanism. Custom components were built in SolidWorks and manufactured via 3D printing, with reliability improved through CAD-based validation and iterative design.</p>

      <h4>Sensor &amp; Actuator Integration</h4>
      <p><strong>Sensors:</strong> IR sensors for ball detection, LDR + laser system for optical detection, limit switches for elevator position feedback.</p>
      <p><strong>Actuators:</strong> NEMA 17 stepper motors for elevator movement, servo motors for doors, electromagnet for retrieval, N20 DC motor for final output. High-current devices were controlled through dedicated driver circuits to protect the FPGA.</p>

      <h4>Challenges &amp; Solutions</h4>
      <ul>
        <li><strong>Sensor false triggering</strong> during initial detection — solved by replacing the vibration sensor with an IR sensor system to prevent unwanted activation from external disturbances.</li>
        <li><strong>Unstable elevator movement</strong> — solved by correcting motor wiring and implementing 1/16 microstepping with A4988 drivers for smoother, more accurate elevator movement.</li>
      </ul>

      <h4>Outcome</h4>
      <p>Successfully developed and demonstrated a fully autonomous system capable of transporting the steel ball through the complete sequence within the required operating time, strengthening practical experience in FPGA development, automation, CAD modelling, electromechanical integration, and system-level debugging.</p>
    `
  },

  "modal-avms": {
    title: "Autonomous Vehicle Management System",
    type: "University · Software / Algorithms",
    year: "2024",
    tech: ["Python", "Data Structures", "Algorithms"],
    repo: { label: "Not publicly available" },
    body: `
      <h4>Project Overview</h4>
      <p>Used data structures and algorithms in Python to build a management system for autonomous vehicle tracking, routing matrix arrays, and speed control optimisation blocks.</p>
    `
  },

  "modal-road": {
    title: "Road Structure Solution",
    type: "University · First-Year Engineering",
    year: "2023",
    tech: ["Civil Solutions", "Management", "Writing"],
    repo: { label: "Coursework report" },
    body: `
      <h4>Project Overview</h4>
      <p>First-year project designing structural improvements for Saibai Island's muddy roads, as requested by Australian engineers, to ensure reliable year-round infrastructure paths.</p>
    `
  },

  "modal-scada": {
    title: "PLC Project Involving SCADA",
    type: "Personal · Industrial Automation",
    year: "2024",
    tech: ["Siemens S7-400", "WinCC Flexible", "SCADA", "Ladder Logic"],
    repo: { label: "Not publicly available" },
    body: `
      <h4>Project Overview</h4>
      <p>Completed a Chemical Treatment Process Automation project as part of coursework at SLIR, using Siemens S7-400 (Simatic Manager) and WinCC Flexible for SCADA development. Focused on programming PLC logic to manage sequential operations — tank filling, timed heating, and pump control — implemented in ladder logic.</p>
      <h4>Control Interfaces</h4>
      <ul>
        <li>SCADA interface developed in WinCC Flexible</li>
        <li>Visual PLC simulation within Simatic Manager</li>
        <li>Physical push buttons and sensors from the model</li>
      </ul>
    `
  },

  "modal-elevator": {
    title: "3-Level Elevator Model",
    type: "Personal · PLC / Automation",
    year: "2024",
    tech: ["PLC Logic", "Ladder Logic", "Automation"],
    repo: { label: "Not publicly available" },
    body: `
      <h4>Project Overview</h4>
      <p>First PLC programming project, completed at the Sri Lanka Institute of Robotics (SLIR). Automated a 3-level elevator model using ladder logic programming, focusing on the control logic.</p>
      <ul>
        <li>The elevator responds to button presses, moving up or down to the selected floor.</li>
        <li>Implemented precise control logic for smooth operation.</li>
      </ul>
    `
  },

  "modal-obstacle": {
    title: "Obstacle Avoiding Vehicle",
    type: "Personal · Robotics",
    year: "2023",
    tech: ["Arduino", "Ultrasonic Sensor", "PID Control"],
    repo: { label: "Not publicly available" },
    body: `
      <h4>Project Overview</h4>
      <p>An Arduino-based obstacle-avoiding vehicle using ultrasonic sensors for detection and a PID controller to maintain stable, precise motor speed — ensuring smooth and efficient navigation.</p>
    `
  },

};