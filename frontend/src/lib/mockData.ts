export interface Question {
  id: string;
  text: string;
  askedYears: number[];
  frequency: number;
  importance: 'High' | 'Medium' | 'Low';
  stars: number; // 1 to 3
  modelAnswer: {
    content?: string; // If present, renders as a single unified markdown notes block
    introduction?: string;
    diagramDescription?: string;
    diagramSvgType?: string; // custom SVGs
    explanation?: string[]; // detailed RGPV 8-marks scoring steps with bold headings
    advantages?: string[]; // 4-6 bullet points
    applications?: string[]; // 4-6 practical applications
    conclusion?: string; // proper conclusion paragraph
    quickRevisionBullets?: string[]; // exactly 4 revision points
  };
}

export interface Unit {
  id: string;
  number: number;
  title: string;
  overview: string;
  questions: Question[];
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  semester: number;
  branch: string;
  university: string;
  units: Unit[];
}

export const mockSubjects: Subject[] = [
  // SEMESTER 1
  {
    id: 'engineering-math-1',
    code: 'BT-102',
    name: 'Engineering Mathematics-I',
    semester: 1,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      {
        id: 'math1-u1',
        number: 1,
        title: 'Differential Calculus & Infinite Series',
        overview: 'Covers expansion of functions using Maclaurin\'s and Taylor\'s theorems, indeterminate forms, convergence of infinite series, and derivatives calculations.',
        questions: [
          {
            id: 'math1-q1',
            text: 'State Maclaurin\'s theorem and expand the function e^x * cos(x) in ascending powers of x up to the term containing x^4.',
            askedYears: [2021, 2022, 2023, 2024],
            frequency: 4,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              introduction: 'The expansion of transcendental functions into infinite power series is a core mathematical technique in numerical computation and engineering analysis. Maclaurin\'s theorem provides a systematic way to represent any infinitely differentiable function as an infinite polynomial centered at the origin, where x = 0. By evaluating the function and its successive derivatives at zero, we construct a polynomial approximation that converges to the true function value within a specific interval. This mathematical tool is highly important in computer software, calculators, and physical simulations where direct evaluation of complex exponential and trigonometric waves is computationally expensive without using series approximations.',
              diagramSvgType: 'taylor',
              diagramDescription: 'Plot showing how Maclaurin polynomials approximate the true curve of e^x * cos(x) around x = 0.',
              explanation: [
                '**Theorem Statement**: Maclaurin\'s theorem states that if a function f(x) possesses continuous derivatives of all orders in the interval, it can be expanded as: f(x) = f(0) + x * f\'(0) + (x^2 / 2!) * f\'\'(0) + (x^3 / 3!) * f\'\'\'(0) + (x^4 / 4!) * f\'\'\'\'(0) + ...',
                '**Evaluating f(0)**: Let the target function be f(x) = e^x * cos(x). Substituting the center value x = 0 gives f(0) = e^0 * cos(0) = 1 * 1 = 1.',
                '**First Derivative f\'(0)**: Differentiating f(x) using the product rule yields f\'(x) = e^x * cos(x) - e^x * sin(x) = e^x * (cos(x) - sin(x)). Substituting x = 0 yields f\'(0) = 1.',
                '**Second Derivative f\'\'(0)**: Differentiating f\'(x) again yields f\'\'(x) = e^x * (cos(x) - sin(x)) + e^x * (-sin(x) - cos(x)) = -2 * e^x * sin(x). Substituting x = 0 yields f\'\'(0) = 0.',
                '**Third Derivative f\'\'\'(0)**: Differentiating f\'\'(x) yields f\'\'\'(x) = -2 * e^x * sin(x) - 2 * e^x * cos(x) = -2 * e^x * (sin(x) + cos(x)). Substituting x = 0 yields f\'\'\'(0) = -2.',
                '**Fourth Derivative f\'\'\'\'(0)**: Differentiating f\'\'\'(x) yields f\'\'\'\'(x) = -2 * e^x * (sin(x) + cos(x)) - 2 * e^x * (cos(x) - sin(x)) = -4 * e^x * cos(x). Substituting x = 0 yields f\'\'\'\'(0) = -4.',
                '**Final Polynomial Substitution**: Substitute the values f(0)=1, f\'(0)=1, f\'\'(0)=0, f\'\'\'(0)=-2, and f\'\'\'\'(0)=-4 back into the Maclaurin expansion: f(x) = 1 + x - (x^3 / 3) - (x^4 / 6) + ...'
              ],
              advantages: [
                'Converts complex transcendental functions into simple polynomial forms.',
                'Simplifies integrations and limit evaluations in calculus.',
                'Enables software systems to compute sine, cosine, and exponentials quickly.',
                'Provides adjustable precision by taking more terms in the expansion.'
              ],
              applications: [
                'Used in calculators to evaluate trigonometric operations.',
                'Used in physics to approximate wave equations near the origin.',
                'Applied in computer graphics for rendering smooth vector paths.',
                'Used in control engineering to linearize non-linear system models.'
              ],
              conclusion: 'In summary, Maclaurin\'s theorem simplifies the function e^x * cos(x) into the polynomial: 1 + x - x^3/3 - x^4/6. This provides a highly accurate approximation near the origin.',
              quickRevisionBullets: [
                'Maclaurin\'s theorem expands functions around the center point x = 0.',
                'Requires computing successive derivatives of the target function.',
                'For e^x * cos(x), derivatives cycle through sine and cosine patterns.',
                'Final polynomial result up to the x^4 term is: 1 + x - x^3/3 - x^4/6.'
              ]
            }
          }
        ]
      },
      {
        id: 'math1-u2',
        number: 2,
        title: 'Definite Integrals & Curve Tracing',
        overview: 'Deals with improper integrals, Beta and Gamma functions and their properties, rectification of curves, and tracing of Cartesian, polar, and parametric curves.',
        questions: [
          {
            id: 'math1-q2',
            text: 'Define Beta and Gamma functions. Prove the relationship between them: Beta(m, n) = [Gamma(m) * Gamma(n)] / Gamma(m + n).',
            askedYears: [2020, 2022, 2024],
            frequency: 3,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              introduction: 'Beta and Gamma functions, historically known as Euler\'s integrals, are advanced mathematical tools used to solve complex definite integrals that cannot be evaluated using elementary integration techniques. The Beta function is a symmetric, two-parameter improper integral, whereas the Gamma function is a single-parameter extension of the factorial function to real and complex numbers. Establishing the relationship between these functions simplifies mathematical physics, quantum mechanics, and engineering statistics calculations. The proof of their connection relies on transforming single integrals into a double integral over a first-quadrant planar region using polar coordinates.',
              diagramSvgType: 'beta-gamma',
              diagramDescription: 'Symmetric integration region mapping from Cartesian coordinates (x, y) to polar coordinates (r, theta) for double integral evaluation.',
              explanation: [
                '**Gamma Function Definition**: The Gamma function is defined by the improper integral: Gamma(n) = integral from 0 to infinity of e^(-x) * x^(n-1) dx, for n > 0.',
                '**Beta Function Definition**: The Beta function is defined by the definite integral: Beta(m, n) = integral from 0 to 1 of x^(m-1) * (1-x)^(n-1) dx, for m, n > 0.',
                '**Substitution Step**: Using the substitution x = y^2 in the Gamma definition yields: Gamma(n) = 2 * integral from 0 to infinity of e^(-y^2) * y^(2n-1) dy. Similarly: Gamma(m) = 2 * integral from 0 to infinity of e^(-x^2) * x^(2m-1) dx.',
                '**Double Integral Product**: Multiplying the two Gamma definitions gives: Gamma(m) * Gamma(n) = 4 * double integral over the first quadrant of e^(-(x^2 + y^2)) * x^(2m-1) * y^(2n-1) dx dy.',
                '**Polar Coordinate Conversion**: Substituting x = r * cos(theta) and y = r * sin(theta) converts the differential area dx dy into the Jacobian form r dr d(theta).',
                '**Setting Limits**: The integration limits transform to r going from 0 to infinity, and theta going from 0 to pi/2.',
                '**Integral Evaluation**: Evaluating the decoupled double integral yields: Gamma(m)*Gamma(n) = 4 * [integral e^(-r^2) * r^(2(m+n)-1) dr] * [integral cos^(2m-1)(theta) * sin^(2n-1)(theta) d(theta)], which simplifies directly to Gamma(m+n) * Beta(m, n).'
              ],
              advantages: [
                'Reduces complex multi-variable integrals to simple factorial expressions.',
                'Enables evaluation of fractional factorials (e.g. Gamma of 1/2).',
                'Simplifies probability density calculations in statistics.',
                'Provides solutions to physical equations in quantum mechanics.'
              ],
              applications: [
                'Applied in physics to model wave functions in quantum chemistry.',
                'Used in statistics to define Beta and Gamma probability distributions.',
                'Used in mechanical engineering to calculate centers of gravity.',
                'Applied in computer graphics for modeling lighting distributions.'
              ],
              conclusion: 'In summary, the mathematical identity Beta(m, n) = Gamma(m)Gamma(n)/Gamma(m+n) is verified, providing a powerful bridge that reduces trigonometric integrations to factorial evaluations.',
              quickRevisionBullets: [
                'Gamma is a single-parameter integral; Beta is a two-parameter integral.',
                'Proof uses substitution to rewrite Gamma functions in quadratic exponent form.',
                'Evaluated as a double integral in the first quadrant of the Cartesian plane.',
                'Polar coordinate transformation (r, theta) decouples the variables to yield the result.'
              ]
            }
          }
        ]
      },
      {
        id: 'math1-u3',
        number: 3,
        title: 'Partial Differentiation & Applications',
        overview: 'Covers functions of two or more variables, partial derivatives, Euler\'s theorem on homogeneous functions, Jacobians, and maxima/minima of two variables.',
        questions: [
          {
            id: 'math1-q3',
            text: 'State Euler\'s theorem on Homogeneous functions. If u = sin^-1((x^2 + y^2) / (x + y)), then prove that x * (du/dx) + y * (du/dy) = tan(u).',
            askedYears: [2021, 2022, 2023],
            frequency: 3,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              introduction: 'Euler\'s theorem on homogeneous functions provides a direct relationship between a homogeneous function, its variables, and its first-order partial derivatives. A function is homogeneous of degree n if scaling all input variables by a factor k scales the output by k^n. In engineering analysis, systems modeled by homogeneous functions can be simplified without calculating individual partial derivatives manually. For composite homogeneous functions, such as inverse trigonometric functions of coordinates, we apply a mathematical transformation to establish homogeneous properties and then utilize partial derivatives to arrive at the solution.',
              diagramSvgType: 'euler-partial',
              diagramDescription: 'Mapping diagram showing functional dependency: coordinates (x, y) maps to homogeneous function z, which maps to composite function u.',
              explanation: [
                '**Theorem Statement**: Euler\'s theorem states that if z is a homogeneous function of variables x and y of degree n, then the equation: x * (dz/dx) + y * (dz/dy) = n * z holds true.',
                '**Functional Rearrangement**: Given u = sin^-1((x^2 + y^2) / (x + y)). Rearranging the equation yields sin(u) = (x^2 + y^2) / (x + y).',
                '**Defining Homogeneous Function**: Let z = sin(u) = f(x, y) = (x^2 + y^2) / (x + y). We test if function z is homogeneous.',
                '**Evaluating Homogeneity Degree**: Substituting x with kx and y with ky: f(kx, ky) = ((kx)^2 + (ky)^2) / (kx + ky) = k^2 * (x^2 + y^2) / (k * (x + y)) = k^1 * f(x, y). Thus, z is homogeneous of degree n = 1.',
                '**Applying Euler\'s Theorem**: Applying the theorem to z yields: x * (dz/dx) + y * (dz/dy) = 1 * z = sin(u).',
                '**Chain Rule Differentiation**: Differentiating z = sin(u) yields dz/dx = cos(u) * (du/dx) and dz/dy = cos(u) * (du/dy).',
                '**Algebraic Simplification**: Substituting these derivatives back into Euler\'s equation: x * [cos(u) * (du/dx)] + y * [cos(u) * (du/dy)] = sin(u). Dividing by cos(u) yields: x * (du/dx) + y * (du/dy) = tan(u).'
              ],
              advantages: [
                'Eliminates the need to compute complex partial derivatives individually.',
                'Simplifies calculations for systems with homogeneous properties.',
                'Provides a direct relationship between physical variables and rate of change.',
                'Reduces algebraic errors in multi-variable calculus.'
              ],
              applications: [
                'Used in thermodynamic equations to model state functions.',
                'Used in fluid mechanics to analyze homogeneous flow velocities.',
                'Applied in economics to model production functions.',
                'Used in electrical network analysis for homogeneous network configurations.'
              ],
              conclusion: 'Hence, it is successfully proved that x * (du/dx) + y * (du/dy) = tan(u) using Euler\'s theorem for homogeneous functions.',
              quickRevisionBullets: [
                'Homogeneous function: f(kx, ky) = k^n * f(x, y), where n is the degree.',
                'Euler\'s equation: x * (dz/dx) + y * (dz/dy) = n * z.',
                'Convert non-homogeneous u to homogeneous z = sin(u) of degree n = 1.',
                'Apply chain rule and divide by cos(u) to prove the result equals tan(u).'
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'basic-computer-bce',
    code: 'BT-105',
    name: 'Basic Computer Engineering',
    semester: 1,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      {
        id: 'bce-u1',
        number: 1,
        title: 'Computer Hardware & Memory System',
        overview: 'Deals with the fundamental block architecture of computer systems, CPU ALU structures, bus systems, and classifications of primary and secondary storage devices.',
        questions: [
          {
            id: 'bce-q1',
            text: 'Draw the block diagram of a computer system. Explain CPU, ALU, Control Unit, and classify memory systems.',
            askedYears: [2020, 2021, 2022, 2023],
            frequency: 4,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              introduction: 'The fundamental architecture of a computer system follows the von Neumann model, which outlines how input devices feed raw data into a central processing unit. The Central Processing Unit (CPU) acts as the brain of the computer system, executing instructions through coordinated electrical pulses. Within the CPU, the Arithmetic Logic Unit (ALU) performs basic additions, logic comparisons, and shifts, while the Control Unit (CU) interprets instructions and directs data flow. Memory structures support this setup by storing immediate data (RAM) and archives (hard drives) to maintain high computation speeds.',
              diagramSvgType: 'comp-block',
              diagramDescription: 'Von Neumann block schematic illustrating Input, CPU (ALU/CU), Memory, and Output stages.',
              explanation: [
                '**Input Unit**: Translates user commands into binary signals (e.g. keyboard matrix, mouse optical triggers) which are sent to registers.',
                '**Arithmetic Logic Unit (ALU)**: Executes additions, multiplications, and boolean comparisons. Regulated by status register flags.',
                '**Control Unit (CU)**: Generates timing and read/write control signals to fetch and decode instructions from memory buffers.',
                '**Primary Memory (RAM)**: Fast, volatile semiconductor memory like RAM (Random Access Memory) which holds active runtime state.',
                '**Secondary Memory (SSD/HDD)**: Non-volatile, magnetic/flash storage like Solid State Drives (SSD) and Hard Disks for persistent storage.',
                '**Output Unit**: Converts processed binary information back into human-readable signals (e.g., monitor displays, printed sheets).'
              ],
              advantages: [
                'Standardizes computer hardware architectures for compatibility.',
                'Enables high-speed executions of mathematical algorithms.',
                'Volatile/non-volatile separation protects permanent files from system crashes.',
                'Allows easy hardware upgrades of input, output, and storage modules.'
              ],
              applications: [
                'Powers personal laptops, desktops, and computing workstations.',
                'Used inside microcontrollers for industrial machine control.',
                'Applied in data servers hosting web and cloud database systems.',
                'Runs core operating systems and application packages.'
              ],
              conclusion: 'In summary, the coordinated interaction of input/output units, ALU computations, control logic cycles, and structured memory hierarchies defines the operational framework of modern computer engineering.',
              quickRevisionBullets: [
                'Computer uses von Neumann model: Input, CPU, Output, Memory.',
                'ALU handles mathematical steps; CU manages system signals.',
                'Primary memory (RAM) is fast but volatile (erases when off).',
                'Secondary memory (SSD/HDD) is non-volatile for long-term storage.'
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'engineering-chemistry',
    code: 'BT-101',
    name: 'Engineering Chemistry',
    semester: 1,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'chem-u1', number: 1, title: 'Water Analysis & Treatment', overview: 'Explores water hardness metrics, boiler troubles (priming, foaming, scaling), and municipal water purifications.', questions: [] },
      { id: 'chem-u2', number: 2, title: 'Fuels & Combustion', overview: 'Deals with classifications of fuels, calorific value testing (Bomb calorimeter), and coal analysis parameters.', questions: [] },
      { id: 'chem-u3', number: 3, title: 'Lubricants & Lubrication', overview: 'Focuses on mechanisms of lubrication, lubricant properties (flash point, viscosity index), and industrial lubricants.', questions: [] },
      { id: 'chem-u4', number: 4, title: 'Polymerization & Plastics', overview: 'Examines classification of polymers, mechanism of polymerization, and properties of industrial plastics.', questions: [] },
      { id: 'chem-u5', number: 5, title: 'Corrosion & Control', overview: 'Deals with wet/dry chemical corrosion, theories of corrosion, and metallic protection coatings.', questions: [] }
    ]
  },
  {
    id: 'english-communication',
    code: 'BT-103',
    name: 'English for Communication',
    semester: 1,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'eng-u1', number: 1, title: 'Communication Theory', overview: 'Deals with communication processes, barriers to communication, and methods to improve verbal exchanges.', questions: [] },
      { id: 'eng-u2', number: 2, title: 'Grammar & Vocabulary', overview: 'Focuses on structural grammar rules, syntax modifications, and technical vocabulary usage.', questions: [] },
      { id: 'eng-u3', number: 3, title: 'Reading & Comprehension', overview: 'Explores critical reading, comprehension scanning, and summarizing techniques.', questions: [] },
      { id: 'eng-u4', number: 4, title: 'Business Correspondence', overview: 'Deals with formatting official reports, business letters, and structural emails.', questions: [] },
      { id: 'eng-u5', number: 5, title: 'Technical Writing', overview: 'Covers guidelines for technical writing, abstract drafting, and engineering manuals.', questions: [] }
    ]
  },

  // SEMESTER 2
  {
    id: 'engineering-math-2',
    code: 'BT-202',
    name: 'Engineering Mathematics-II',
    semester: 2,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'math2-u1', number: 1, title: 'Ordinary Differential Equations (Higher Order)', overview: 'Focuses on homogeneous and non-homogeneous linear differential equations of higher order with constant coefficients.', questions: [] },
      { id: 'math2-u2', number: 2, title: 'Fourier Series & Transforms', overview: 'Deals with periodic functions, Euler\'s formula, Dirichlet conditions, and Fourier transform integrations.', questions: [] },
      { id: 'math2-u3', number: 3, title: 'Laplace Transforms', overview: 'Covers transforms of elementary functions, derivatives, integrals, and solving differential equations.', questions: [] },
      { id: 'math2-u4', number: 4, title: 'Second Order Partial Differential Equations', overview: 'Examines classification of second order PDEs, separation of variables, and wave equations.', questions: [] },
      { id: 'math2-u5', number: 5, title: 'Vector Calculus', overview: 'Deals with gradient, divergence, curl, line and surface integrals, and Green/Stokes theorems.', questions: [] }
    ]
  },
  {
    id: 'basic-electrical-beee',
    code: 'BT-104',
    name: 'Basic Electrical & Electronics',
    semester: 2,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      {
        id: 'beee-u1',
        number: 1,
        title: 'DC Circuits Analysis',
        overview: 'Deals with Kirchhoff\'s laws, mesh and nodal analysis, and networks theorems like Thevenin\'s, Norton\'s, and Superposition.',
        questions: [
          {
            id: 'beee-q1',
            text: 'State Thevenin\'s Theorem and explain the step-by-step procedure to find the equivalent circuit of an active linear network.',
            askedYears: [2020, 2022, 2023],
            frequency: 3,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              introduction: 'Thevenin\'s theorem is a core circuit analysis tool that simplifies complex electrical networks down to a single voltage source in series with a resistor. It states that any linear active network containing voltage sources, current sources, and resistors, when viewed from two terminals, can be replaced by an equivalent circuit containing an open-circuit voltage source (Vth) in series with an equivalent resistance (Rth). This theorem is invaluable in electrical engineering because it allows designers to analyze changes in load components without recalculating the current in the entire system.',
              diagramSvgType: 'thevenin',
              diagramDescription: 'Transforming a complex linear network into a Thevenin equivalent circuit: Vth source in series with Rth resistor connected to Load.',
              explanation: [
                '**Theorem Statement**: Any linear active network can be replaced by a single voltage source Vth in series with a resistor Rth.',
                '**Load Disconnection**: Identify the load resistor RL and open-circuit the two terminals across it.',
                '**Vth Calculation**: Find the open-circuit voltage across the load terminals using standard circuit techniques.',
                '**Deactivating Sources**: Turn off independent sources: replace voltage sources with short circuits and current sources with open circuits.',
                '**Rth Calculation**: Calculate the equivalent resistance looking back into the open terminals.',
                '**Equivalent Circuit**: Connect Vth in series with Rth, and reconnect the load resistor RL.',
                '**Load Current Formula**: Compute load current using: IL = Vth / (Rth + RL).'
              ],
              advantages: [
                'Reduces complex circuits to a simple two-component equivalent model.',
                'Allows fast analysis of variable load components.',
                'Reduces computation time in large power grids.',
                'Simplifies impedance matching in communication systems.'
              ],
              applications: [
                'Used in power distribution systems to calculate line current changes.',
                'Used in electronic amplifiers for input/output impedance calculations.',
                'Applied in circuit simulation software to solve networks quickly.',
                'Used in designing battery source models.'
              ],
              conclusion: 'In summary, Thevenin\'s theorem provides an elegant analytical reduction method that simplifies network calculations, saving computation time in hardware designs.',
              quickRevisionBullets: [
                'Thevenin reduces a circuit to a single voltage source (Vth) and resistor (Rth).',
                'Load resistor RL is open-circuited to compute open-circuit voltage Vth.',
                'Voltage sources are shorted and current sources opened to compute Rth.',
                'Load current formula: I_L = V_th / (R_th + R_L).'
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'engineering-physics',
    code: 'BT-201',
    name: 'Engineering Physics',
    semester: 2,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      {
        id: 'phy-u1',
        number: 1,
        title: 'Wave Optics & Interference',
        overview: 'Focuses on interference of light, Newton\'s rings experiment, diffraction gratings, resolving power, and polarization.',
        questions: [
          {
            id: 'phy-q1',
            text: 'Describe the construction and working of Newton\'s Rings experiment. Derive the expression for the diameter of dark rings.',
            askedYears: [2021, 2023, 2024],
            frequency: 3,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              introduction: 'Newton\'s rings is a classic optics experiment that demonstrates the interference of light waves reflected from the boundaries of a thin air film of varying thickness. The experimental setup consists of a plano-convex lens of large radius of curvature placed on a flat glass plate. This configuration creates a wedge-shaped thin air film between the curved and flat glass surfaces. When illuminated with monochromatic light, circular interference fringes are observed under a microscope. These concentric circular rings, centered on the contact point, are used to measure light wavelengths and refractive indexes of liquids.',
              diagramSvgType: 'newtons-rings',
              diagramDescription: 'Newton\'s rings optical setup showing the plano-convex lens, glass plate, air film, and circular fringe pattern.',
              explanation: [
                '**Experimental Setup**: A plano-convex lens L is placed on a flat glass plate G, creating a wedge-shaped thin air film between the curved and flat glass surfaces.',
                '**Interference Source**: Monochromatic light is projected horizontally and reflected downwards onto the lens, causing interference between waves reflecting from the boundaries of the air film.',
                '**Path Difference Equations**: The total path difference delta between the reflected rays is given by delta = 2 * t + lambda / 2, where t is the air film thickness.',
                '**Dark Ring Condition**: For destructive interference, 2 * t + lambda / 2 = (2n + 1) * lambda / 2, which simplifies to 2 * t = n * lambda.',
                '**Wedge Geometry**: From circular geometry, the air thickness is related to ring radius r by: t = r^2 / (2 * R), where R is the radius of curvature.',
                '**Diameter Formulation**: Substituting t into the equation yields r^2 = n * lambda * R. Since diameter D = 2 * r, we derive: Dn^2 = 4 * n * lambda * R.'
              ],
              advantages: [
                'Provides a highly precise method to measure the wavelength of light.',
                'Allows calculation of refractive indices of transparent liquids.',
                'Verifies the wave nature of light through interference patterns.',
                'Helps check the optical flatness of glass surfaces.'
              ],
              applications: [
                'Used in precision optics manufacturing to calibrate lenses.',
                'Applied in chemistry laboratories to test liquid purity parameters.',
                'Used in measuring thickness changes of microscopically thin films.',
                'Applied in design tools for anti-reflective coatings.'
              ],
              conclusion: 'Hence, the diameter of the nth dark ring is derived as Dn = sqrt(4 * n * lambda * R), verifying that the dark ring diameter is proportional to the square root of integers.',
              quickRevisionBullets: [
                'Newton\'s rings are circular interference fringes caused by a wedge-shaped air film.',
                'Constructed using a plano-convex lens resting on a flat glass plate.',
                'Reflections from the boundaries of the air film interfere constructively or destructively.',
                'Dark ring diameter formula: D_n = sqrt(4 * n * \u03bb * R).'
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'basic-mechanical-bme',
    code: 'BT-203',
    name: 'Basic Mechanical Engineering',
    semester: 2,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'bme-u1', number: 1, title: 'Materials & Stress Analysis', overview: 'Covers stress-strain diagrams, engineering materials classification, testing of materials, and elastic constants.', questions: [] },
      { id: 'bme-u2', number: 2, title: 'Thermodynamics Foundations', overview: 'Deals with thermodynamic systems, first and second laws of thermodynamics, and steam properties.', questions: [] },
      { id: 'bme-u3', number: 3, title: 'Reciprocating Machines & IC Engines', overview: 'Explores working principles of 2-stroke and 4-stroke SI/CI engines, Otto and Diesel cycles.', questions: [] },
      { id: 'bme-u4', number: 4, title: 'Boilers & Steam Engineering', overview: 'Examines classifications of steam boilers, mountings, accessories, and boiler efficiency calculations.', questions: [] },
      { id: 'bme-u5', number: 5, title: 'Manufacturing Operations & Machine Tools', overview: 'Covers lathe machine operations, drilling, milling, shaping, and basic welding processes.', questions: [] }
    ]
  },

  // SEMESTER 3
  {
    id: 'energy-environmental-eee',
    code: 'CS-301',
    name: 'Energy & Environmental Engineering',
    semester: 3,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'eee-u1', number: 1, title: 'Energy Resources & Ecosystems', overview: 'Deals with renewable and non-renewable energy resources, ecosystem structures, and energy flows.', questions: [] },
      { id: 'eee-u2', number: 2, title: 'Air & Noise Pollutions', overview: 'Covers sources of air pollutants, control devices, noise measurements, and mitigation procedures.', questions: [] },
      { id: 'eee-u3', number: 3, title: 'Water & Soil Pollutions', overview: 'Focuses on industrial wastewater treatments, soil quality degradation, and solid waste managements.', questions: [] },
      { id: 'eee-u4', number: 4, title: 'Environmental Impact Assessment', overview: 'Examines EIA methodologies, environmental audits, and government safety guidelines.', questions: [] },
      { id: 'eee-u5', number: 5, title: 'Global Environmental Issues', overview: 'Deals with greenhouse effects, ozone layer depletion, acid rain, and global climate summits.', questions: [] }
    ]
  },
  {
    id: 'discrete-structures-ds',
    code: 'CS-302',
    name: 'Discrete Structure',
    semester: 3,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'disc-u1', number: 1, title: 'Sets, Relations & Functions', overview: 'Covers set theory operations, properties of relations, equivalence relations, and mathematical induction.', questions: [] },
      { id: 'disc-u2', number: 2, title: 'Algebraic Structures', overview: 'Deals with groups, subgroups, cyclic groups, rings, integral domains, and fields definitions.', questions: [] },
      { id: 'disc-u3', number: 3, title: 'Propositional Logic', overview: 'Focuses on truth tables, logical equivalence, tautologies, predicate calculus, and quantifiers.', questions: [] },
      { id: 'disc-u4', number: 4, title: 'Graph Theory Foundations', overview: 'Examines Euler and Hamiltonian paths, graph coloring, trees, and spanning tree algorithms.', questions: [] },
      { id: 'disc-u5', number: 5, title: 'Recurrence Relations', overview: 'Covers solving linear recurrence relations, generating functions, and pigeonhole principle applications.', questions: [] }
    ]
  },
  {
    id: 'data-structures-ds',
    code: 'CS-303',
    name: 'Data Structures',
    semester: 3,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      {
        id: 'ds-u1',
        number: 1,
        title: 'Stacks and Queues',
        overview: 'Covers sequential data representations, stack push/pop algorithms, Polish notations, circular queues, and double-ended queues (deques).',
        questions: [
          {
            id: 'ds-q1',
            text: 'Explain Stack push and pop operations with algorithms. Convert the infix expression (A + B) * (C - D) to postfix using a stack.',
            askedYears: [2020, 2022, 2023],
            frequency: 3,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              introduction: 'A Stack is a linear data structure that follows the Last-In, First-Out (LIFO) operational model, meaning the last element added is the first one removed. Stacks are fundamental in computer systems, used in function calls, recursion, undo operations, and expression evaluations. The two core operations are Push (insertion) and Pop (removal), both occurring at a single point called the Top. Infix to postfix conversion is a standard stack application used by compilers to reformat expressions, removing parentheses so the CPU can evaluate expressions in a single pass.',
              diagramSvgType: 'stack-op',
              diagramDescription: 'Stack array visualization showing Top index pointers during Push and Pop operations.',
              explanation: [
                '**LIFO Mechanism**: The stack functions strictly via the Last-In First-Out rule. All additions and extractions happen at the Top.',
                '**Push Algorithm**: Checks for overflow (Top == MAX-1). If not full, increments Top and assigns the value to Stack[Top].',
                '**Pop Algorithm**: Checks for underflow (Top == -1). If not empty, extracts Stack[Top] and decrements the Top index pointer.',
                '**Infix scanning**: Scans the expression from left to right. Operands are output immediately to the postfix expression.',
                '**Operator Precedence**: Higher/equal precedence operators are popped from the stack before pushing the scanned operator.',
                '**Parentheses Handlers**: Push \'(\' onto stack. Pop operators to output when \')\' is scanned, until \'(\' is removed.',
                '**Trace Result**: Resolves the expression (A + B) * (C - D) step-by-step to the final postfix form: AB+CD-*.'
              ],
              advantages: [
                'Provides fast, constant time O(1) insertions and deletions.',
                'Allows easy recursive function state management.',
                'Simplifies arithmetic evaluations for compiler design.',
                'Requires simple array or linked list pointer structures.'
              ],
              applications: [
                'Used by compilers to parse equations and expressions.',
                'Manages function call histories and recursion logs in memory.',
                'Enables undo/redo history stacks inside application editors.',
                'Applied in browser histories to track backward page navigation.'
              ],
              conclusion: 'Hence, the stack algorithms are defined, and the infix expression is converted to the postfix form "AB+CD-*", enabling parentheses-free arithmetic evaluation.',
              quickRevisionBullets: [
                'Stack is a LIFO linear data structure managed by a Top pointer.',
                'Push inserts elements after incrementing Top; Pop extracts elements and decrements Top.',
                'Stack overflow occurs at MAX-1; underflow occurs when Top equals -1.',
                'Infix to postfix conversion removes parentheses, simplifying expression evaluation for compilers.'
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'oop-methodology',
    code: 'CS-305',
    name: 'Object Oriented Programming',
    semester: 3,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'oop-u1', number: 1, title: 'Introduction to Java & OOP', overview: 'Introduces core OOP principles, Java Virtual Machine (JVM) architecture, bytecode execution, and class structures.', questions: [] },
      { id: 'oop-u2', number: 2, title: 'Inheritance & Interfaces', overview: 'Covers class extension, method overriding, super keyword, abstract classes, and multiple inheritance via interfaces.', questions: [] },
      { id: 'oop-u3', number: 3, title: 'Exception Handling & Multithreading', overview: 'Deals with try-catch blocks, throw/throws modifiers, thread lifecycles, synchronization, and runnables.', questions: [] },
      { id: 'oop-u4', number: 4, title: 'Java I/O & File Handling', overview: 'Explores byte/character streams, file reading/writing classes, object serialization, and socket communication.', questions: [] },
      { id: 'oop-u5', number: 5, title: 'Java Collection Framework & GUI', overview: 'Deals with Lists, Sets, Maps, generic programming, AWT/Swing elements, and event handling loops.', questions: [] }
    ]
  },

  // SEMESTER 4
  {
    id: 'design-analysis-algorithms',
    code: 'CS-402',
    name: 'Analysis Design of Algorithms',
    semester: 4,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'algo-u1', number: 1, title: 'Complexity & Divide-and-Conquer', overview: 'Focuses on asymptotic notations (Big-O), recurrence relations, and algorithms like Merge and Quick Sort.', questions: [] },
      { id: 'algo-u2', number: 2, title: 'Greedy Method', overview: 'Deals with optimization strategies, fractional knapsack, job sequencing, and minimum spanning trees (Kruskal/Prim).', questions: [] },
      { id: 'algo-u3', number: 3, title: 'Dynamic Programming', overview: 'Covers matrix chain multiplication, 0/1 knapsack, traveling salesperson problem, and multistage graphs.', questions: [] },
      { id: 'algo-u4', number: 4, title: 'Backtracking & Branch-and-Bound', overview: 'Examines state-space tree traversals, N-Queens problem, Hamiltonian cycles, and traveling salesperson optimization.', questions: [] },
      { id: 'algo-u5', number: 5, title: 'NP-Hard & NP-Complete Problems', overview: 'Deals with Turing machines, deterministic vs non-deterministic algorithms, and Cook\'s theorem derivations.', questions: [] }
    ]
  },
  {
    id: 'database-systems-dbms',
    code: 'CS-403',
    name: 'Database Management Systems',
    semester: 4,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      {
        id: 'dbms-u1',
        number: 1,
        title: 'Database Architecture & ER Modeling',
        overview: 'Covers database characteristics, 3-level schema architecture, data independence, entity types, attributes, and Entity-Relationship diagrams.',
        questions: [
          {
            id: 'dbms-q1',
            text: 'Draw and explain the 3-Schema Architecture of a database system. Why is it used?',
            askedYears: [2021, 2022, 2024],
            frequency: 3,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              introduction: 'The 3-schema architecture, also known as the ANSI-SPARC architecture, is a standard conceptual framework used to design and structure Database Management Systems. It divides the database structure into three independent levels: the external level, the conceptual level, and the internal level. The primary goal of this three-tiered design is to separate the user applications from the physical database file storage. This separation ensures data independence, meaning that changes made at lower physical storage levels do not require updates to user application programs or logical database schemas.',
              diagramSvgType: 'dbms-3schema',
              diagramDescription: 'ANSI-SPARC 3-Schema model illustrating mappings between User Views, Conceptual Schema, Internal Schema, and Disk Files.',
              explanation: [
                '**External Level (View Schema)**: The highest level, defining customized user views of the database. Different users see different representations of the same database.',
                '**Conceptual Level (Logical Schema)**: The middle level, defining what data is stored and the logical relationships between them (tables, fields, constraints).',
                '**Internal Level (Physical Schema)**: The lowest level, defining how data is physically stored in storage devices (file blocks, indexes, compression).',
                '**Physical Data Independence**: The ability to modify the internal schema (e.g. changing disk files, indexing) without changing the conceptual schema.',
                '**Logical Data Independence**: The ability to modify the conceptual schema (e.g. adding columns, relations) without changing the external schemas or user views.'
              ],
              advantages: [
                'Insulates application code from hardware storage modifications.',
                'Enables customized interfaces for different database users.',
                'Maintains logical data integrity while scaling storage servers.',
                'Reduces database downtime during index rebuilds.'
              ],
              applications: [
                'Applied in banking databases to separate customer views from ledger files.',
                'Used in e-commerce portals to show inventories without raw database exposures.',
                'Used in enterprise ERP systems to manage division permissions.',
                'Runs inside large cloud databases for scale partitions.'
              ],
              conclusion: 'In summary, the 3-schema database architecture is the foundation of modern data storage, guaranteeing structural flexibility and data integrity through logical and physical independence layers.',
              quickRevisionBullets: [
                '3-Schema model splits database into External, Conceptual, and Internal levels.',
                'External is user view; Conceptual is logical schema; Internal is physical storage.',
                'Data independence ensures changes at a lower level do not impact upper layers.',
                'Decouples application programs from physical storage details.'
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: 'software-engineering',
    code: 'CS-404',
    name: 'Software Engineering',
    semester: 4,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'se-u1', number: 1, title: 'Software Process Models', overview: 'Deals with software life cycles, SDLC stages, Waterfall, Spiral, and Agile methodologies.', questions: [] },
      { id: 'se-u2', number: 2, title: 'Software Requirements Analysis', overview: 'Focuses on SRS document standards, requirements elicitation, and data flow diagrams (DFD).', questions: [] },
      { id: 'se-u3', number: 3, title: 'Software Design Concepts', overview: 'Covers cohesion and coupling, modular structures, object-oriented design patterns, and UML notations.', questions: [] },
      { id: 'se-u4', number: 4, title: 'Software Testing Methodologies', overview: 'Examines black-box and white-box testing, unit, integration, system testing, and debugging strategies.', questions: [] },
      { id: 'se-u5', number: 5, title: 'Software Quality & Project Management', overview: 'Covers COCOMO estimation, risk analysis, CMMI models, and software maintenance lifecycles.', questions: [] }
    ]
  },
  {
    id: 'computer-system-org',
    code: 'CS-405',
    name: 'Computer System Organization',
    semester: 4,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'cso-u1', number: 1, title: 'Register Transfer & Microoperations', overview: 'Deals with bus architectures, arithmetic microoperations, and computer instruction cycles.', questions: [] },
      { id: 'cso-u2', number: 2, title: 'Basic Computer Organization', overview: 'Covers control memory structure, instruction formats, addressing modes, and CPU architectures.', questions: [] },
      { id: 'cso-u3', number: 3, title: 'Computer Arithmetic', overview: 'Focuses on floating-point arithmetic, Booth\'s multiplication algorithm, and division hardware structures.', questions: [] },
      { id: 'cso-u4', number: 4, title: 'Input-Output Organization', overview: 'Examines programmed I/O, interrupt-initiated communications, and Direct Memory Access (DMA).', questions: [] },
      { id: 'cso-u5', number: 5, title: 'Memory Organization', overview: 'Covers cache memory mapping structures, virtual memory partitions, page tables, and memory hierarchies.', questions: [] }
    ]
  },

  // SEMESTER 5
  {
    id: 'theory-of-computation',
    code: 'CS-501',
    name: 'Theory of Computation',
    semester: 5,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'toc-u1', number: 1, title: 'Finite Automata & Regular Expressions', overview: 'Focuses on DFA, NFA, equivalence conversions, regular expressions, and pumping lemma for regular sets.', questions: [] },
      { id: 'toc-u2', number: 2, title: 'Context Free Grammars & Pushdown Automata', overview: 'Deals with CFG syntax, derivation trees, pushdown automata design, and equivalence structures.', questions: [] },
      { id: 'toc-u3', number: 3, title: 'Turing Machines', overview: 'Covers Turing machine architectures, transition diagrams, halt problem definitions, and TM variations.', questions: [] },
      { id: 'toc-u4', number: 4, title: 'Chomsky Hierarchy & Grammars', overview: 'Examines Type-0, Type-1, Type-2, Type-3 grammars, and linear bounded automata.', questions: [] },
      { id: 'toc-u5', number: 5, title: 'Undecidability & Complexity Classes', overview: 'Deals with recursive functions, Post correspondence problems, and P/NP complexity classes.', questions: [] }
    ]
  },
  {
    id: 'computer-networks',
    code: 'CS-503',
    name: 'Computer Networks',
    semester: 5,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'cn-u1', number: 1, title: 'Physical Layer & Topologies', overview: 'Deals with transmission media, analog/digital signals, network topologies, and physical connections.', questions: [] },
      { id: 'cn-u2', number: 2, title: 'Data Link Layer', overview: 'Covers framing, sliding window protocols, error detection/correction codes, and MAC sublayers.', questions: [] },
      { id: 'cn-u3', number: 3, title: 'Network Layer', overview: 'Focuses on IP addressing (IPv4/IPv6), routing algorithms, packet congestion control, and subnetting.', questions: [] },
      { id: 'cn-u4', number: 4, title: 'Transport Layer', overview: 'Examines connection-oriented TCP, connectionless UDP, socket allocations, and ports flow controls.', questions: [] },
      { id: 'cn-u5', number: 5, title: 'Application Layer', overview: 'Covers DNS, HTTP, FTP, SMTP, network security encryption algorithms, and firewalls.', questions: [] }
    ]
  },
  {
    id: 'computer-graphics-cg',
    code: 'CS-504',
    name: 'Computer Graphics',
    semester: 5,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'cg-u1', number: 1, title: 'Display Devices & Line Generation', overview: 'Covers cathode ray tubes (CRT), raster scan display operations, and DDA/Bresenham line generators.', questions: [] },
      { id: 'cg-u2', number: 2, title: '2D Transformations & Clipping', overview: 'Deals with scaling, translation, rotation matrices, homogeneous coordinates, and Cohen-Sutherland line clipping.', questions: [] },
      { id: 'cg-u3', number: 3, title: '3D Transformations & Projections', overview: 'Focuses on 3D rotation, scaling matrices, and parallel vs perspective projection viewings.', questions: [] },
      { id: 'cg-u4', number: 4, title: 'Curves & Surfaces', overview: 'Examines Hermite, Bezier, and B-Spline curve equations, control polygons, and properties.', questions: [] },
      { id: 'cg-u5', number: 5, title: 'Illumination & Shading Models', overview: 'Deals with Phong and Gouraud shading methods, hidden surface removals, and ray tracing.', questions: [] }
    ]
  },
  {
    id: 'linux-administration',
    code: 'CS-505',
    name: 'Linux Administration',
    semester: 5,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'lin-u1', number: 1, title: 'Linux Basics & Shell Command', overview: 'Covers Linux installation processes, file configurations, directory trees, and terminal shell scripts.', questions: [] },
      { id: 'lin-u2', number: 2, title: 'User & Process Management', overview: 'Deals with creating users, checking privileges, process schedules (cron), and system status logs.', questions: [] },
      { id: 'lin-u3', number: 3, title: 'Linux File Systems & Disks', overview: 'Focuses on partition creation, mounting file systems, LVM management, and file systems recovery.', questions: [] },
      { id: 'lin-u4', number: 4, title: 'Linux Network Services', overview: 'Examines network configuration files, SSH logins, and FTP server allocations.', questions: [] },
      { id: 'lin-u5', number: 5, title: 'Linux Security & Firewall', overview: 'Covers user permissions limits, SELinux guidelines, and IPTables firewall setups.', questions: [] }
    ]
  },

  // SEMESTER 6
  {
    id: 'compiler-design',
    code: 'CS-601',
    name: 'Compiler Design',
    semester: 6,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'cd-u1', number: 1, title: 'Lexical Analysis', overview: 'Deals with compiler phases, token validation, lex tool integration, and finite state recognitions.', questions: [] },
      { id: 'cd-u2', number: 2, title: 'Syntax Analysis & Parsing', overview: 'Covers context-free grammars, LL(1) parsers, LR parsers (SLR, LALR), and parser generators.', questions: [] },
      { id: 'cd-u3', number: 3, title: 'Syntax Directed Translation', overview: 'Focuses on attributes (synthesized/inherited), intermediate codes (three-address code), and syntax trees.', questions: [] },
      { id: 'cd-u4', number: 4, title: 'Symbol Tables & Runtime Environment', overview: 'Examines symbol table organizations, storage strategies, and activation records scopes.', questions: [] },
      { id: 'cd-u5', number: 5, title: 'Code Optimization & Generation', overview: 'Covers loop optimizations, basic blocks, register allocation, and final assembly code generation.', questions: [] }
    ]
  },
  {
    id: 'operating-systems',
    code: 'CS-604',
    name: 'Operating Systems',
    semester: 6,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'os-u1', number: 1, title: 'Introduction & System Call', overview: 'Deals with OS functions, microkernels, system calls, and interface designs.', questions: [] },
      { id: 'os-u2', number: 2, title: 'CPU Scheduling & Synchronization', overview: 'Covers processes, scheduling algorithms, semaphores, critical section problems, and monitors.', questions: [] },
      { id: 'os-u3', number: 3, title: 'Deadlock Management', overview: 'Focuses on deadlock conditions, prevention, avoidance (Banker\'s algorithm), and detection procedures.', questions: [] },
      { id: 'os-u4', number: 4, title: 'Memory Management & Virtual Memory', overview: 'Examines paging, segmentation, page replacements (LRU, FIFO), and thrashing occurrences.', questions: [] },
      { id: 'os-u5', number: 5, title: 'File System & Disk Scheduling', overview: 'Covers file access methods, directory allocations, disk head queues algorithms (SCAN, SSTF).', questions: [] }
    ]
  },
  {
    id: 'distributed-systems',
    code: 'CS-603',
    name: 'Distributed Systems',
    semester: 6,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'dsy-u1', number: 1, title: 'Distributed Architectures', overview: 'Focuses on distributed system models, middleware interfaces, and client-server setups.', questions: [] },
      { id: 'dsy-u2', number: 2, title: 'Synchronization & Lamport Clocks', overview: 'Deals with logical clocks, vector timestamps, mutual exclusions, and election algorithms.', questions: [] },
      { id: 'dsy-u3', number: 3, title: 'Distributed File Systems', overview: 'Covers DFS requirements, NFS structures, and HDFS architectures.', questions: [] },
      { id: 'dsy-u4', number: 4, title: 'Replication & Fault Tolerance', overview: 'Examines data replication, backup systems, consensus algorithms (Paxos), and crash recoveries.', questions: [] },
      { id: 'dsy-u5', number: 5, title: 'Distributed Shared Memory', overview: 'Deals with DSM models, memory consistency structures, and hardware directories.', questions: [] }
    ]
  },
  {
    id: 'software-testing-management',
    code: 'CS-602',
    name: 'Software Testing & Quality',
    semester: 6,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'stq-u1', number: 1, title: 'Software Quality Assurance', overview: 'Covers software quality metrics, ISO standards, and project planning checklists.', questions: [] },
      { id: 'stq-u2', number: 2, title: 'Black Box Testing Techniques', overview: 'Deals with equivalence partitioning, boundary value analysis, and cause-effect graphings.', questions: [] },
      { id: 'stq-u3', number: 3, title: 'White Box Testing Techniques', overview: 'Focuses on code coverage, cyclomatic complexity calculations, and loop testings.', questions: [] },
      { id: 'stq-u4', number: 4, title: 'Test Automation Tools', overview: 'Examines scripting languages, Selenium integrations, and regression testing schedules.', questions: [] },
      { id: 'stq-u5', number: 5, title: 'Software Metrics & Auditing', overview: 'Covers CMMI verification levels, review logs, and software maintenance protocols.', questions: [] }
    ]
  },

  // SEMESTER 7
  {
    id: 'cloud-computing',
    code: 'CS-701',
    name: 'Cloud Computing',
    semester: 7,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'cc-u1', number: 1, title: 'Cloud Architectures & Service Models', overview: 'Covers SaaS, PaaS, IaaS definitions, public/private clouds, and virtualization techniques.', questions: [] },
      { id: 'cc-u2', number: 2, title: 'Hypervisors & Virtualization', overview: 'Deals with hardware virtualizations, KVM, VMware configurations, and virtual machine setups.', questions: [] },
      { id: 'cc-u3', number: 3, title: 'Cloud Storage & Databases', overview: 'Focuses on distributed databases, NoSQL databases, object storage systems, and block storage.', questions: [] },
      { id: 'cc-u4', number: 4, title: 'Cloud Security Systems', overview: 'Examines network access permissions, multi-tenancy isolation policies, and encryption schemes.', questions: [] },
      { id: 'cc-u5', number: 5, title: 'Service Level Agreement & Billing', overview: 'Covers SLA contracts parameters, resource monitors, and consumption billing structures.', questions: [] }
    ]
  },
  {
    id: 'cyber-security',
    code: 'CS-702',
    name: 'Cyber Security',
    semester: 7,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'cyb-u1', number: 1, title: 'Cryptography Foundations', overview: 'Deals with symmetric and asymmetric key architectures, DES, AES, and RSA algorithms.', questions: [] },
      { id: 'cyb-u2', number: 2, title: 'Network Security Protocols', overview: 'Covers IPsec, SSL/TLS, secure email (PGP), and wireless network security limits.', questions: [] },
      { id: 'cyb-u3', number: 3, title: 'System Security & Malware', overview: 'Focuses on viruses, trojans, worms detection techniques, and buffer overflows.', questions: [] },
      { id: 'cyb-u4', number: 4, title: 'Firewalls & Intrusion Detection', overview: 'Examines packet filtering routers, firewall rules, and IDS/IPS systems configurations.', questions: [] },
      { id: 'cyb-u5', number: 5, title: 'Cyber Law & Forensics', overview: 'Covers IT Acts guidelines, digital evidence collection rules, and disk imaging investigations.', questions: [] }
    ]
  },
  {
    id: 'machine-learning',
    code: 'CS-703',
    name: 'Machine Learning',
    semester: 7,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'ml-u1', number: 1, title: 'Introduction & Supervised Learning', overview: 'Covers regression equations, gradient descent, decision trees, and classification models.', questions: [] },
      { id: 'ml-u2', number: 2, title: 'Support Vector Machines & Naive Bayes', overview: 'Deals with hyperplanes margins, kernel tricks, and probabilistic classifications.', questions: [] },
      { id: 'ml-u3', number: 3, title: 'Unsupervised Learning', overview: 'Focuses on K-means clustering, principal component analysis (PCA), and anomaly detections.', questions: [] },
      { id: 'ml-u4', number: 4, title: 'Neural Networks & Deep Learning', overview: 'Examines multi-layer perceptrons, backpropagation algorithms, activation functions, and weights calculations.', questions: [] },
      { id: 'ml-u5', number: 5, title: 'Model Evaluation & Tuning', overview: 'Covers bias-variance tradeoffs, cross-validation parameters, and confusion matrix scores.', questions: [] }
    ]
  },
  {
    id: 'blockchain-technologies',
    code: 'CS-704',
    name: 'Blockchain Technologies',
    semester: 7,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'bc-u1', number: 1, title: 'Distributed Ledger Basics', overview: 'Covers hash cryptography functions, blocks structures, and distributed ledger systems.', questions: [] },
      { id: 'bc-u2', number: 2, title: 'Consensus Protocols', overview: 'Deals with Proof of Work (PoW), Proof of Stake (PoS), and Byzantine fault tolerance.', questions: [] },
      { id: 'bc-u3', number: 3, title: 'Smart Contracts & Ethereum', overview: 'Focuses on Solidity compiler setups, EVM environments, and smart contract structures.', questions: [] },
      { id: 'bc-u4', number: 4, title: 'Hyperledger Architecture', overview: 'Examines permissioned blockchains, Fabric architectures, and transaction lifecycles.', questions: [] },
      { id: 'bc-u5', number: 5, title: 'Blockchain Applications & Ethics', overview: 'Covers supply chain tracking, digital identities registries, and regulatory guidelines.', questions: [] }
    ]
  },

  // SEMESTER 8
  {
    id: 'internet-of-things',
    code: 'CS-801',
    name: 'Internet of Things (IoT)',
    semester: 8,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { 
        id: 'iot-u1', 
        number: 1, 
        title: 'IoT Physical Devices & Sensors', 
        overview: 'Covers microcontrollers (Arduino, Raspberry Pi), sensor nodes, actuators, and signal conversions.', 
        questions: [
          {
            id: 'iot-q1',
            text: 'Explain IoT Architecture & Characteristics',
            askedYears: [2020, 2022, 2024],
            frequency: 3,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              content: `# Q1. Explain IoT Architecture & Characteristics

### PYQ: May 2024, June 2022

### Importance: ⭐⭐⭐

## Introduction

The Internet of Things (IoT) refers to a network of physical devices connected to the internet that collect and share data. IoT architecture consists of multiple layers that work together to gather, process, and transmit data. Understanding the core layers and characteristics of IoT is essential for designing efficient systems.

## Diagram

\`\`\`text
Application Layer
       ↑
Cloud/Processing Layer
       ↑
Network/Gateway Layer
       ↑
Sensing/Device Layer
\`\`\`

## Layers of IoT Architecture

### 1. Sensing/Device Layer
* Consists of physical devices, sensors, and actuators.
* Collects raw data from the surrounding environment.
* Examples: Temperature sensors, motion detectors, RFID tags.

### 2. Network/Gateway Layer
* Transmits data from the devices to the cloud or database.
* Connects physical devices using communication networks.
* Examples: Wi-Fi, Zigbee, Bluetooth, cellular networks.

### 3. Processing Layer
* Analyzes and processes the collected data.
* Filters, aggregates, and stores information in databases or cloud servers.
* Performs analytics to extract useful insights.

### 4. Application Layer
* Delivers the processed information to the end-users.
* Includes user interfaces, dashboard screens, and software systems.
* Examples: Smart home controls, health monitors, industrial dashboards.

## Key Characteristics of IoT

### 1. Connectivity
* Enables different devices to connect and communicate with each other seamlessly.

### 2. Intelligence & Semantics
* Uses algorithms and data analysis to make smart decisions and automate tasks.

### 3. Dynamic Nature
* Devices constantly change their state (e.g., sleeping, active, moving, changing context).

### 4. Enormous Scale
* Involves billions of devices connected to the network, requiring scalable management.

### 5. Heterogeneity
* Supports different devices, operating systems, and networks working together.

### 6. Security
* Protects sensitive data and device operations from unauthorized access.

## Advantages
* Automation of daily tasks
* Real-time monitoring and analytics
* Increased operational efficiency
* Smart energy and resource management

## Applications
* Smart Homes (lighting, security)
* Healthcare (patient tracking)
* Smart Agriculture (soil monitoring)
* Intelligent Transport Systems

## Keywords for Revision
Sensing Layer, Gateway Layer, Processing Layer, Application Layer, Connectivity, Scale, Heterogeneity

## Conclusion
IoT architecture provides a structured framework for data collection and processing, while its characteristics ensure flexible, intelligent, and scalable operations.`
            }
          },
          {
            id: 'iot-q2',
            text: 'Explain M2M vs IoT',
            askedYears: [2021, 2023],
            frequency: 2,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              content: `# Q2. Explain M2M vs IoT

### PYQ: June 2023, June 2021

### Importance: ⭐⭐⭐

## Introduction

Machine-to-Machine (M2M) and Internet of Things (IoT) are terms used for connected systems. While both enable device communication and data exchange, they differ in architecture, communication modes, scalability, and application scope. M2M is a point-to-point connection, whereas IoT is a network-based architecture.

## Diagram

\`\`\`text
[M2M: Point-to-Point]
Device 1 ← (Proprietary Network) → Device 2

[IoT: Cloud-Based Network]
Device 1 ──┐
Device 2 ──┼→ [Internet/Gateway] → [Cloud/App]
Device 3 ──┘
\`\`\`

## Key Differences Between M2M and IoT

### 1. Communication Type
* **M2M**: Uses point-to-point (P2P) communication where two machines connect directly.
* **IoT**: Uses network-based communication where multiple devices connect to the cloud.

### 2. Connectivity & Protocols
* **M2M**: Relies on cellular networks or proprietary hardware-level connections.
* **IoT**: Relies on IP-based networks and standard protocols like HTTP, MQTT, and CoAP.

### 3. Data Integration
* **M2M**: Data is typically stored locally or inside dedicated server systems.
* **IoT**: Data is integrated with cloud servers, analytics tools, and mobile applications.

### 4. Scalability
* **M2M**: Limited scalability due to point-to-point connections.
* **IoT**: Highly scalable, allowing millions of devices to be added to the network.

### 5. Openness
* **M2M**: Closed, proprietary systems designed for specific tasks.
* **IoT**: Open systems with APIs that allow integration with third-party software.

## Advantages of IoT over M2M
* Global access to data via cloud integration
* Standard protocols simplify development
* Advanced data analytics capabilities
* High scalability and device management

## Applications of M2M
* Automatic meter reading (AMR)
* ATM machine communications
* Industrial machine diagnostics

## Applications of IoT
* Smart cities and traffic management
* Wearable health trackers
* Home automation systems

## Keywords for Revision
M2M, Point-to-Point, IoT, Cloud Integration, IP Networks, Protocols, Scalability

## Conclusion
M2M represents the foundational point-to-point hardware connection, whereas IoT expands this concept into a large-scale, cloud-integrated network for smart decision-making.`
            }
          },
          {
            id: 'iot-q3',
            text: 'Explain IoT Gateway & Ecosystem',
            askedYears: [2022, 2024],
            frequency: 2,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              content: `# Q3. Explain IoT Gateway & Ecosystem

### PYQ: May 2024, June 2022

### Importance: ⭐⭐⭐

## Introduction

An IoT Gateway acts as a bridge between local IoT devices (sensors) and the cloud. It manages data translation, security protocols, and device connectivity. The IoT Ecosystem refers to the entire framework of sensors, gateways, network channels, cloud analytics, and user applications working together.

## Diagram

\`\`\`text
Sensors (Bluetooth/Zigbee)
          ↓
     IoT Gateway
(Protocol translation & security)
          ↓
   Internet (IP/MQTT)
          ↓
  Cloud (DB & AI Analytics)
\`\`\`

## Functions of IoT Gateway

### 1. Protocol Translation
* Translates local communication protocols (Zigbee, Bluetooth) into internet protocols (TCP/IP, MQTT).

### 2. Data Filtering & Aggregation
* Filters out noise and aggregates data locally before uploading to reduce network traffic.

### 3. Local Storage & Processing
* Temporarily stores data if internet connectivity is lost and executes local control tasks.

### 4. Security & Encryption
* Encrypts outgoing data and authenticates connected devices to prevent hacking.

## Components of IoT Ecosystem

### 1. Sensing & Actuation
* Collects raw physical data and performs actions (e.g. turning off motors).

### 2. Local Networks
* Short-range networks connecting sensors to the gateway (e.g., Bluetooth, Zigbee).

### 3. Gateways
* Bridges the local sensor network to the global internet.

### 4. Cloud & Analytics
* Stores, processes, and analyzes the data using AI and database tools.

### 5. User Applications
* Mobile and web dashboards that let users monitor and control the system.

## Advantages
* Reduces cloud bandwidth consumption
* Provides local decision-making capabilities
* Enhances security at the edge of the network
* Simplifies protocol integration

## Applications
* Industrial automation monitoring
* Smart grid energy management
* Connected vehicle systems
* Remote medical monitoring

## Keywords for Revision
IoT Gateway, Protocol Translation, Data Filtering, Edge Processing, Ecosystem, Sensing, Cloud

## Conclusion
An IoT Gateway is crucial for bridging physical devices and the cloud, making the overall IoT ecosystem secure, scalable, and efficient.`
            }
          },
          {
            id: 'iot-q4',
            text: 'Explain Logical vs Physical Design of IoT',
            askedYears: [2021, 2023],
            frequency: 2,
            importance: 'High',
            stars: 3,
            modelAnswer: {
              content: `# Q4. Explain Logical vs Physical Design of IoT

### PYQ: June 2023, June 2021

### Importance: ⭐⭐⭐

## Introduction

IoT systems are described using two perspectives: Logical Design and Physical Design. Logical design defines the system's abstract structure, communication models, functional blocks, and APIs. Physical design describes the actual hardware components, protocols, and devices used to build the network.

## Diagram

\`\`\`text
  [Logical Design]          [Physical Design]
  - Functional Blocks       - Microcontrollers
  - Comm. Models            - Physical Sensors
  - Comm. APIs              - Wire/Wireless Media
\`\`\`

## Logical Design of IoT

### 1. Functional Blocks
* Includes blocks like Devices, Services, Communication, Management, Security, and Application.

### 2. Communication Models
* Define how data flows between devices (e.g. Request-Response, Publish-Subscribe, Push-Pull, Exclusive Pair).

### 3. Communication APIs
* Interfaces that allow application integration (e.g., REST API, WebSocket API).

## Physical Design of IoT

### 1. IoT Devices
* The physical hardware components that collect data and control states (e.g., Arduino, Raspberry Pi).
* Components: CPU, Memory, I/O ports, and network interfaces.

### 2. IoT Protocols
* The physical and transport protocols used for wireless connectivity.
* Examples: IEEE 802.15.4 (Zigbee), IEEE 802.11 (Wi-Fi), LoRaWAN, Cellular (LTE/5G).

## Comparison Key Points
* **Abstract vs Concrete**: Logical design is conceptual and hardware-independent, whereas physical design is concrete and hardware-specific.
* **Software vs Hardware**: Logical design focuses on API structures and communication flows, while physical design focuses on boards, links, and physical layer networks.

## Advantages of Separation
* Allows logical modeling before buying hardware
* Simplifies system troubleshooting
* Permits switching hardware without rewriting APIs

## Applications
* System architecture planning
* Choosing communication protocols
* Embedded hardware selection

## Keywords for Revision
Logical Design, Physical Design, Functional Blocks, Protocols, Hardware, APIs, Communication Models

## Conclusion
Separating logical and physical designs helps developers build structured systems, enabling flexible software integration with reliable hardware networks.`
            }
          },
{
            id: 'iot-q5',
            text: 'Explain IoT Planes, Enablers and Their Interdependencies',
            askedYears: [2024],
            frequency: 1,
            importance: 'High',
            stars: 2,
            modelAnswer: {
              content: `# Q5. Explain IoT Planes, Enablers and Their Interdependencies

### PYQ: May 2024

### Importance: ⭐⭐

## Introduction

The Internet of Things consists of various operational layers known as planes. These planes manage data flow, control operations, and resource management. Several technologies called IoT enablers support the functioning of IoT systems. Together, planes and enablers provide intelligent communication, automation, and decision-making capabilities.

## Diagram

\`\`\`text
Sensors
   ↓
Data Plane
   ↓
Control Plane
   ↓
Management Plane
   ↓
Applications
\`\`\`

## IoT Planes

### 1. Data Plane

* Responsible for data collection and transmission.
* Transfers information from sensors to processing units.
* Ensures smooth data flow.

### 2. Control Plane

* Controls communication processes.
* Manages routing and network operations.
* Maintains connectivity among devices.

### 3. Management Plane

* Monitors system resources.
* Handles configuration and maintenance.
* Ensures efficient operation.

## IoT Enablers

### 1. Sensors and Actuators

* Collect and respond to environmental information.

### 2. RFID Technology

* Enables automatic identification and tracking.

### 3. Cloud Computing

* Provides storage and computational resources.

### 4. Big Data Analytics

* Processes large amounts of data.

### 5. Artificial Intelligence

* Supports intelligent decision-making.

### 6. Wireless Communication

* Enables device connectivity.

## Interdependencies

### Sensor → Network

* Sensors generate information.
* Network transfers information.

### Network → Cloud

* Cloud stores and processes data.

### Cloud → Analytics

* Analytics extracts useful insights.

### Analytics → Applications

* Applications provide intelligent services.

## Advantages

* Better automation
* Real-time monitoring
* Improved efficiency
* Smart decision-making

## Applications

* Smart Cities
* Healthcare
* Agriculture
* Industrial IoT

## Keywords for Revision

Data Plane, Control Plane, Management Plane, Cloud Computing, AI, Big Data

## Conclusion

IoT planes and enablers work together to provide intelligent communication and automation. Their coordination is essential for efficient IoT operation.`
            }
          },
          {
            id: 'iot-q6',
            text: 'Explain IoT Reference Architecture',
            askedYears: [],
            frequency: 0,
            importance: 'High',
            stars: 2,
            modelAnswer: {
              content: `# Q6. Explain IoT Reference Architecture

### Importance: ⭐⭐

### High Probability Topic

## Introduction

IoT Reference Architecture is a standardized framework used for designing IoT systems. It defines the structure and responsibilities of different layers. This architecture helps developers build scalable, secure, and interoperable systems. It provides a common model for implementing IoT applications.

## Diagram

\`\`\`text
Business Layer
      ↑
Application Layer
      ↑
Processing Layer
      ↑
Communication Layer
      ↑
Device Layer
\`\`\`

## Layers of IoT Reference Architecture

### 1. Device Layer

* Contains sensors and actuators.
* Collects environmental data.

### 2. Communication Layer

* Transfers data between devices and cloud.
* Uses communication technologies.

### 3. Processing Layer

* Stores and processes collected information.
* Uses cloud computing and databases.

### 4. Application Layer

* Provides services to users.
* Supports various IoT applications.

### 5. Business Layer

* Handles business management and analysis.
* Supports strategic decision-making.

## Features

### Standardization

* Provides a common framework.

### Scalability

* Supports system expansion.

### Interoperability

* Allows communication among different devices.

### Security

* Protects devices and information.

## Advantages

* Simplified system development
* Better integration
* Improved scalability
* Easy maintenance

## Applications

* Smart Homes
* Smart Healthcare
* Smart Industries
* Smart Transportation

## Keywords for Revision

Reference Architecture, Device Layer, Communication Layer, Processing Layer, Business Layer

## Conclusion

IoT Reference Architecture provides a structured framework for designing secure, scalable, and efficient IoT systems.`
            }
          },
          {
            id: 'iot-q7',
            text: 'Explain Functional Blocks of IoT',
            askedYears: [],
            frequency: 0,
            importance: 'High',
            stars: 2,
            modelAnswer: {
              content: `# Q7. Explain Functional Blocks of IoT

### Importance: ⭐⭐

### High Probability Topic

## Introduction

Functional blocks are the fundamental building units of an IoT system. Each block performs a specific function such as communication, processing, management, and security. Together they enable the complete operation of IoT applications. Understanding these blocks helps in designing effective IoT systems.

## Diagram

\`\`\`text
Devices
   ↓
Communication
   ↓
Services
   ↓
Applications
   ↑
Management
   ↑
Security
\`\`\`

## Functional Blocks

### 1. Device Block

* Includes sensors and actuators.
* Collects environmental information.

### 2. Communication Block

* Transfers data between devices and cloud.

### 3. Service Block

* Processes information.
* Generates useful services.

### 4. Management Block

* Monitors and controls devices.
* Maintains system performance.

### 5. Security Block

* Protects data and resources.
* Provides authentication and encryption.

### 6. Application Block

* Delivers services to users.
* Provides user interface.

## Features

* Modular design
* Better organization
* Efficient management
* Improved security

## Advantages

* Easy maintenance
* Better scalability
* Improved performance
* Enhanced security

## Applications

* Smart Homes
* Healthcare Systems
* Industrial Automation

## Keywords for Revision

Functional Blocks, Communication Block, Service Block, Security Block

## Conclusion

Functional blocks divide IoT operations into manageable units and help create efficient, secure, and scalable systems.`
            }
          },
          {
            id: 'iot-q8',
            text: 'Explain IoT Communication Models',
            askedYears: [],
            frequency: 0,
            importance: 'Medium',
            stars: 1,
            modelAnswer: {
              content: `# Q8. Explain IoT Communication Models

### Importance: ⭐

### Important Theory Question

## Introduction

IoT communication models define how devices exchange information with each other. Different models are used according to communication requirements. These models improve flexibility and scalability. They form the basis of IoT communication systems.

## Diagram

\`\`\`text
Publisher
    ↓
 Broker
    ↓
Subscriber
\`\`\`

## Types of Communication Models

### 1. Request–Response Model

* Client sends request.
* Server sends response.
* Commonly used in HTTP.

### 2. Publish–Subscribe Model

* Publisher sends information.
* Broker distributes messages.
* Subscribers receive required information.

### 3. Push–Pull Model

* Producers push data.
* Consumers pull data when required.

### 4. Exclusive Pair Model

* Two devices maintain continuous communication.

## Advantages

* Efficient communication
* Better scalability
* Flexible operation
* Reduced network traffic

## Applications

* MQTT Communication
* Cloud Services
* Smart Monitoring Systems

## Keywords for Revision

Request-Response, Publish-Subscribe, Push-Pull, Exclusive Pair

## Conclusion

Communication models define how IoT devices interact and exchange information efficiently.`
            }
          },
          {
            id: 'iot-q9',
            text: 'Explain IoT Communication APIs',
            askedYears: [],
            frequency: 0,
            importance: 'Medium',
            stars: 1,
            modelAnswer: {
              content: `# Q9. Explain IoT Communication APIs

### Importance: ⭐

### Frequently Asked as Short Note

## Introduction

Application Programming Interfaces (APIs) provide a standard method for communication between IoT devices and applications. APIs simplify integration and data exchange. They help different systems work together efficiently. APIs are essential components of modern IoT applications.

## Diagram

\`\`\`text
Device
   ↓
 API
   ↓
Cloud
   ↓
User
\`\`\`

## Types of APIs

### 1. REST API

* Uses HTTP protocol.
* Most widely used API.

### 2. WebSocket API

* Supports real-time communication.
* Enables bidirectional communication.

### 3. SOAP API

* XML-based protocol.
* Provides secure communication.

## Features

* Platform independence
* Easy integration
* Fast communication
* Reusable services

## Advantages

* Simplifies development
* Better interoperability
* Improved scalability
* Efficient data exchange

## Applications

* Smart Homes
* Healthcare
* Industrial Automation
* Smart Cities

## Keywords for Revision

REST API, WebSocket API, SOAP API, Integration, Interoperability

## Conclusion

IoT APIs provide efficient communication between devices, cloud platforms, and applications, making IoT systems flexible and scalable.`
            }
          }
          ]
      },
      { id: 'iot-u2', number: 2, title: 'IoT Network Protocols', overview: 'Deals with Zigbee, LoRaWAN, MQTT, and CoAP wireless communications protocols.', questions: [] },
      { id: 'iot-u3', number: 3, title: 'IoT Data Storage & Analytics', overview: 'Focuses on cloud data ingestions, database storage systems for sensors, and real-time streams processing.', questions: [] },
      { id: 'iot-u4', number: 4, title: 'IoT Security Frameworks', overview: 'Examines physical node protections, cryptographic channel handshakes, and access security.', questions: [] },
      { id: 'iot-u5', number: 5, title: 'Smart City & Industrial IoT', overview: 'Covers applications in smart grids, automated factories, environmental sensors, and healthcare tracker logs.', questions: [] }
    ]
  },
  {
    id: 'deep-learning',
    code: 'CS-802',
    name: 'Deep Learning',
    semester: 8,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'dl-u1', number: 1, title: 'Deep Neural Networks Foundations', overview: 'Deals with loss optimization functions, weights initializations, and regularization parameters.', questions: [] },
      { id: 'dl-u2', number: 2, title: 'Convolutional Neural Networks', overview: 'Covers kernel convolutions, pooling layer operations, AlexNet/ResNet, and computer vision filters.', questions: [] },
      { id: 'dl-u3', number: 3, title: 'Recurrent Neural Networks & LSTM', overview: 'Focuses on vanishing gradients, gated recurrent units (GRU), and sequence modeling.', questions: [] },
      { id: 'dl-u4', number: 4, title: 'Autoencoders & Generative Models', overview: 'Examines dimensional reductions, generative adversarial networks (GAN), and latent distributions.', questions: [] },
      { id: 'dl-u5', number: 5, title: 'Transformers & Large Models', overview: 'Covers self-attention modules, positional encodings, and GPT/BERT transformer blocks.', questions: [] }
    ]
  },
  {
    id: 'major-project',
    code: 'CS-803',
    name: 'Major Project',
    semester: 8,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'mp-u1', number: 1, title: 'Project Conceptualization', overview: 'Focuses on requirement elicitation, literature review analysis, and system architecture planning.', questions: [] },
      { id: 'mp-u2', number: 2, title: 'System Design & Modeling', overview: 'Covers database schema modeling, modular block drawings, and UML data flows.', questions: [] },
      { id: 'mp-u3', number: 3, title: 'Implementation & Development', overview: 'Deals with system coding, coding standards verification, and environment deployments.', questions: [] },
      { id: 'mp-u4', number: 4, title: 'System Testing & Optimization', overview: 'Focuses on validation testings, integration bugs tracking, and performance optimizations.', questions: [] },
      { id: 'mp-u5', number: 5, title: 'Documentation & Review Logs', overview: 'Covers technical report writing, draft papers publishing, and project presentations.', questions: [] }
    ]
  },
  {
    id: 'data-science',
    code: 'CS-804',
    name: 'Data Science',
    semester: 8,
    branch: 'CSE',
    university: 'RGPV',
    units: [
      { id: 'ds-u1', number: 1, title: 'Data Preprocessing', overview: 'Covers handling missing values, scaling features, data cleaning procedures, and statistics.', questions: [] },
      { id: 'ds-u2', number: 2, title: 'Exploratory Data Analysis', overview: 'Deals with correlation coefficients, data visualization plots, and dimensional analysis.', questions: [] },
      { id: 'ds-u3', number: 3, title: 'Statistical Models', overview: 'Focuses on hypothesis testing, probability calculations, and linear estimations.', questions: [] },
      { id: 'ds-u4', number: 4, title: 'Data Operations & ETL', overview: 'Examines database connections, extraction scripts, and data pipeline transformations.', questions: [] },
      { id: 'ds-u5', number: 5, title: 'Scientific Computing Tools', overview: 'Covers vector calculations, matrix operations, and model evaluations frameworks.', questions: [] }
    ]
  }
];

export interface SearchResult {
  title: string;
  subjectName: string;
  subjectId: string;
  unitNumber: number;
  type: 'topic' | 'question';
  snippet: string;
}

export function searchMockData(query: string): SearchResult[] {
  if (!query || query.trim() === '') return [];
  const cleanQuery = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  mockSubjects.forEach(subject => {
    subject.units.forEach(unit => {
      unit.questions.forEach(q => {
        if (q.text.toLowerCase().includes(cleanQuery) || q.modelAnswer.introduction?.toLowerCase().includes(cleanQuery) || q.modelAnswer.content?.toLowerCase().includes(cleanQuery)) {
          results.push({
            title: `Q: ${q.text.substring(0, 60)}...`,
            subjectName: subject.name,
            subjectId: subject.id,
            unitNumber: unit.number,
            type: 'question',
            snippet: q.text
          });
        }
      });
    });
  });

  return results.slice(0, 6);
}
