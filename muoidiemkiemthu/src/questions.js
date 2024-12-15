const questions = [
  {
    question: "Q. 1: Given the following state transition table Which of the test cases below will cover the following series of state transitions? S1 SO S1 S2 SO",
    answers: ["A. D, A, B, C.", "B. A, B, C, D.", "C. D, A, B.", "D. A, B, C."],
    correctAnswer: "A"
  },
  {
    question: "Q. 2: From a Testing perspective, what are the MAIN purposes of Configuration Management?",
    details: [
      "i) Identifying the version of software under test.",
      "ii) Controlling the version of testware items.",
      "iii) Developing new testware items.",
      "iv) Tracking changes to testware items.",
      "v) Analysing the need for new testware items."
    ],
    answers: ["A. ii, iv and v.", "B. ii, iii and iv.", "C. i, ii and iv.", "D. i, iii and v."],
    correctAnswer: "C"
  },
  {
    question: "Q. 3: Which of the following is a MAJOR task of test planning?",
    answers: ["A. Scheduling test analysis and design tasks.", "B. Initiating corrective actions.", "C. Monitoring progress and test coverage.", "D. Measuring and analyzing results."],
    correctAnswer: "A"
  },
  {
    question: "Q. 4: Which of the following BEST describes the difference between an inspection and a walkthrough?",
    answers: [
      "A. Both inspections and walkthroughs are led by the author.",
      "B. An inspection is led by a moderator and a walkthrough is led by the author.",
      "C. Both inspections and walkthroughs are led by a trained moderator.",
      "D. A walkthrough is led by the author. The author is not present during inspections."
    ],
    correctAnswer: "B"
  },
  {
    question: "Q. 5: Where may functional testing be performed?",
    answers: [
      "A. At system and acceptance testing levels only.",
      "B. At all test levels.",
      "C. At all levels above integration testing.",
      "D. At the acceptance testing level only."
    ],
    correctAnswer: "B"
  },
  {
    question: "Q. 6: What is the MAIN objective when reviewing a software deliverable?",
    answers: [
      "A. To identify potential application failures by use of a test specification.",
      "B. To identify defects in any software work product.",
      "C. To identify spelling mistakes in a requirements specification.",
      "D. To identify standards inconsistencies in the code."
    ],
    correctAnswer: "B"
  },
  {
    question: "Q. 7: Who would USUALLY perform debugging activities?",
    answers: ["A. Developers.", "B. Analysts.", "C. Testers.", "D. Incident Managers."],
    correctAnswer: "A"
  },
  {
    question: "Q. 8: Which of the following would you NOT usually find on a software incident report?",
    answers: [
      "A. The name and/or organisational position of the person raising the problem.",
      "B. Version of the Software Under Test.",
      "C. Suggestions as to how to fix the problem.",
      "D. Actual and expected results."
    ],
    correctAnswer: "C"
  },
  {
    question: "Q. 9: Which of the following defines the expected results of a test?",
    answers: [
      "A. Test case specification.",
      "B. Test design specification.",
      "C. Test procedure specification.",
      "D. Test results."
    ],
    correctAnswer: "A"
  },
  {
    question: "Q. 10: Some tools are geared more for developer use. For the 5 tools listed, which statement BEST details those for developers?",
    answers: [
      "A. i, iii, and iv. are more for developers.",
      "B. ii, and iv. are more for developers.",
      "C. ii, iii, and iv. are more for developers.",
      "D. ii, and iii. are more for developers."
    ],
    correctAnswer: "B"
  },

    {
      question: "Q. 11: Which of the following is correct?", 
      answers: [
        "A. Impact analysis assesses the effect on the system of a defect found in regression testing.",
        "B. Impact analysis assesses the effect of a new person joining the regression test team.",
        "C. Impact analysis assesses whether or not a defect found in regression testing has been fixed correctly.",
        "D. Impact analysis assesses the effect of a change to the system to determine how much regression testing to do."
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 12: As part of which test process do you determine the exit criteria?", 
      answers: [
        "A. Test planning.",
        "B. Evaluating exit criteria and reporting.",
        "C. Test closure.",
        "D. Test control."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 13: Given the following state transition diagram, which of the following series of state transitions contains an INVALID transition that may indicate a fault in the system design?", 
      answers: [
        "A. Login → Browse → Basket → Checkout → Basket → Checkout → Pay → Logout.",
        "B. Login → Browse → Basket → Checkout → Pay → Logout.",
        "C. Login → Browse → Basket → Checkout → Basket → Logout.",
        "D. Login → Browse → Basket → Browse → Basket → Checkout → Pay → Logout."
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 14: Which of the following is a MAJOR task of test implementation and execution?", 
      answers: [
        "A. Measuring and analyzing results.",
        "B. Reporting discrepancies as incidents.",
        "C. Identifying test conditions or test requirements.",
        "D. Assessing if more tests are needed."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 15: What is beta testing?", 
      answers: [
        "A. Testing performed by potential customers at the developers location.",
        "B. Testing performed by potential customers at their own locations.",
        "C. Testing performed by product developers at the customer's location.",
        "D. Testing performed by product developers at their own locations."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 16: Given the following fragment of code, how many tests are required for 100% decision coverage?", 
      answers: [
        "A. 3",
        "B. 4",
        "C. 2",
        "D. 1"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 17: You have designed test cases to provide 100% statement and 100% decision coverage for the following fragment of code. How many more test cases are required?", 
      answers: [
        "A. One more test case will be required for 100 % decision coverage.",
        "B. Two more test cases will be required for 100 % statement coverage, one of which will be used to provide 100% decision coverage.",
        "C. None, existing test cases can be used.",
        "D. One more test case will be required for 100% statement coverage."
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 18: A thermometer measures temperature in whole degrees only. What are the best values in degrees to cover all equivalence partitions?", 
      answers: [
        "A. 15, 19 and 25.",
        "B. 17, 18 and 19.",
        "C. 18, 20 and 22.",
        "D. 16, 26 and 32."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 19: Which activity in the fundamental test process creates test suites for efficient test execution?", 
      answers: [
        "A. Implementation and execution.",
        "B. Planning and control.",
        "C. Analysis and design.",
        "D. Test closure."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 20: Which of the following is TRUE?", 
      answers: [
        "A. Confirmation testing is testing fixes to a set of defects and Regression testing is testing to establish whether any defects have been introduced as a result of changes.",
        "B. Confirmation testing is testing to establish whether any defects have been introduced as a result of changes and Regression testing is testing fixes to a set of defects.",
        "C. Confirmation testing and Regression testing are both testing to establish whether any defects have been introduced as a result of changes.",
        "D. Confirmation testing and Regression testing are both testing fixes to a set of defects."
      ],
      correctAnswer: "A"
    },
  {
            question: "Q. 21: Given the following decision table: Which of the following test cases and expected results is VALID?",
            answers: [
              "A. 23 year old in insurance class A Premium is £0 and excess is £500.",
              "B. 51 year old in insurance class C Premium is £0 and excess is £1000.",
              "C. 31 year old in insurance class B Premium is £0 and excess is £500.",
              "D. 43 year old in insurance class C Premium is £0 and excess is £1000."
            ],
            correctAnswer: "A"
          },
          {
            question: "Q. 22: When should configuration management procedures be implemented?",
            answers: [
              "A. During test planning.",
              "B. During test analysis.",
              "C. During test execution.",
              "D. When evaluating exit criteria"
            ],
            correctAnswer: "A"
          },
          {
            question: "Q. 23: Which of the following are characteristic of regression testing?",
            answers: [
              "A. ii, iv.",
              "B. ii, iii.",
              "C. i, iii, iv.",
              "D. iii."
            ],
            correctAnswer: "B"
          },
          {
            question: "Q. 24: A wholesaler sells printer cartridges. The minimum order quantity is 5. There is a 20% discount for orders of 100 or more printer cartridges. You have been asked to prepare test cases using various values for the number of printer cartridges ordered. Which of the following groups contain three test inputs that would be generated using Boundary Value Analysis?",
            answers: [
              "A. 5, 6, 20",
              "B. 4, 5, 80",
              "C. 4, 5, 99",
              "D. 1, 20, 100"
            ],
            correctAnswer: "C"
          },
          {
            question: "Q. 25: Which of the following activities should be performed during the selection and implementation of a testing tool?",
            answers: [
              "A. i, ii, iii.",
              "B. ii, iii, iv.",
              "C. i, iii, iv.",
              "D. i, ii, iv."
            ],
            correctAnswer: "D"
          },
          {
            question: "Q. 26: What is the MAIN benefit of designing tests early in the life cycle?",
            answers: [
              "A. It is cheaper than designing tests during the test phases.",
              "B. It helps prevent defects from being introduced into the code.",
              "C. Tests designed early are more effective than tests designed later.",
              "D. It saves time during the testing phases when testers are busy."
            ],
            correctAnswer: "B"
          },
          {
            question: "Q. 27: Which of the following benefits are MOST likely to be achieved by using test tools?",
            answers: [
              "A. ii and iv",
              "B. ii and iii",
              "C. i and iv",
              "D. i and iii"
            ],
            correctAnswer: "C"
          },
          {
            question: "Q. 28: What is the KEY difference between preventative and reactive approaches to testing?",
            answers: [
              "A. Preventative tests and reactive tests are designed as early as possible.",
              "B. Preventative tests are designed early; reactive tests are designed after the software has been produced.",
              "C. Preventative testing is always analytical; reactive testing is always heuristic.",
              "D. Preventative tests are designed after the software has been produced; reactive tests are designed early in response to review comments."
            ],
            correctAnswer: "B"
          },
          {
            question: "Q. 29: What is the purpose of exit criteria?",
            answers: [
              "A. To define when a test level is complete.",
              "B. To determine when a test has completed.",
              "C. To identify when a software system should be retired.",
              "D. To determine whether a test has passed."
            ],
            correctAnswer: "A"
          },
          {
            question: "Q. 30: What determines the level of risk?",
            answers: [
              "A. The cost of dealing with an adverse event if it occurs.",
              "B. The probability that an adverse event will occur.",
              "C. The amount of testing planned before release of a system.",
              "D. The likelihood of an adverse event and the impact of the event."
            ],
            correctAnswer: "D"
          }, {
      question: "Q. 31: With which of the following categories is a test comparator tool USUALLY associated?",
      answers: [
        "A. Tool support for performance and monitoring.",
        "B. Tool support for static testing.",
        "C. Tool support for test execution and logging.",
        "D. Tool support for the management of testing and tests."
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 32: Which activities form part of test planning?",
      answers: [
        "A. i, ii & iv are true, iii & v are false.",
        "B. ii & iii are true, i, iv & v are false.",
        "C. iv & v are true, i, ii & iii are false.",
        "D. i, ii & iii are true iv & v are false."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 33: Match the following terms and statements.",
      answers: [
        "A. 1Y, 2Z, 3X, 4W.",
        "B. 1X, 2W, 3Z, 4Y.",
        "C. 1Z, 2X, 3W, 4Y.",
        "D. 1Z, 2Y, 3X, 4W."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 34: Which type of test design techniques does the following statement best describe: a procedure to derive test cases based on the specification of a component?",
      answers: [
        "A. Black Box Techniques.",
        "B. White Box Techniques.",
        "C. Glass Box Techniques.",
        "D. Experience Based Techniques."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 35: For which of the following would a static analysis tool be MOST useful?",
      answers: [
        "A. Supporting reviews.",
        "B. Validating models of the software.",
        "C. Testing code executed in a special test harness.",
        "D. Enforcement of coding standards."
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 36: Which of the following types of defects is use case testing MOST LIKELY to uncover?",
      answers: [
        "A. ii, iii.",
        "B. i, iii.",
        "C. iii, iv.",
        "D. i, ii"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 37: Which of the following is MOST important in the selection of a test approach?",
      answers: [
        "A. Availability of tools to support the proposed techniques.",
        "B. The budget allowed for training in proposed techniques.",
        "C. Available skills and experience in the proposed techniques.",
        "D. The willingness of the test team to learn new techniques."
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 38: Which of the following is a benefit of test independence?",
      answers: [
        "A. It does not require familiarity with the code.",
        "B. It is cheaper than using developers to test their own code.",
        "C. It avoids author bias in defining effective tests.",
        "D. Testers are better at finding defects than developers."
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 39: The above diagram represents the following paths through the code. What is the MINIMUM combination of paths required to provide full statement coverage?",
      answers: [
        "A. A",
        "B. ABD",
        "C. ABCD",
        "D. ACD"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 40: Which of the following is MOST characteristic of specification based (black-box) techniques?",
      answers: [
        "A. Test cases can be easily automated.",
        "B. Test cases are independent of each other.",
        "C. Test cases are derived systematically from models of the system.",
        "D. Test cases are derived systematically from the delivered code."
      ],
      correctAnswer: "C"
    },
  {
      question: "Q. 41: Which of the following combinations correctly describes a valid approach to component testing?",
      answers: [
        "A. i and ii.",
        "B. i, ii and iii.",
        "C. iii.",
        "D. ii and iv."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 42: Which of the following is a purpose of the review planning phase?",
      answers: [
        "A. Log defects.",
        "B. Explain the documents to the participants.",
        "C. Gather metrics.",
        "D. Allocate the individual roles."
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 43: A defect arrival rate curve:",
      answers: [
        "A. Shows the number of newly discovered defects per unit time.",
        "B. Shows the number of open defects per unit time.",
        "C. Shows the cumulative total number of defects found up to this time.",
        "D. Any of these, depending on the company."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 44: Which is the best definition of complete testing?",
      answers: [
        "A. You have discovered every bug in the program.",
        "B. You have tested every statement, branch, and combination of branches in the program.",
        "C. You have completed every test in the test plan.",
        "D. You have reached the scheduled ship date."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 45: Complete statement and branch coverage means:",
      answers: [
        "A. That you have tested every statement in the program.",
        "B. That you have tested every statement and every branch in the program.",
        "C. That you have tested every IF statement in the program.",
        "D. That you have tested every combination of values of IF statements in the program."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 46: There are several risks of managing your project's schedule with a statistical reliability model. These include:",
      answers: [
        "A. Testers spend more energy early in the product trying to find bugs than preparing to do the rest of the project's work more efficiently.",
        "B. Managers might not realize that the testing effort is ineffective, late in the project, because they expect a low rate of bug finding, so the low rate achieved doesn't alarm them.",
        "C. It can increase the end-of-project pressure on testers to not find bugs, or to not report bugs.",
        "D. All of the above."
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 47: Typical defects that are easier to find in reviews than in dynamic testing are:",
      answers: [
        "A. Deviations from standards.",
        "B. Requirement defects.",
        "C. Design defects.",
        "D. Insufficient maintainability and incorrect interface specifications.",
        "E. All of the above."
      ],
      correctAnswer: "E"
    },
    {
      question: "Q. 48: Reviews, static analysis and dynamic testing have the same objective:",
      answers: [
        "A. Identifying defects.",
        "B. Fixing defects.",
        "C. A and B.",
        "D. None of the above."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 49: We can achieve complete statement coverage but still miss bugs because:",
      answers: [
        "A. The failure occurs only if you reach a statement taking the TRUE branch of an IF statement, and you got to the statement with a test that passed through the FALSE branch.",
        "B. The failure depends on the program's inability to handle specific data values, rather than on the program's flow of control.",
        "C. We are not required to test code that customers are unlikely to execute.",
        "D. All of the above."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 50: Measurement dysfunction is a problem because:",
      answers: [
        "A. Even though the numbers you look at appear better, to achieve these numbers, people are doing other aspects of their work much less well.",
        "B. We don't know how to measure a variable (our measurement is dysfunctional) and so we don't know how to interpret the result.",
        "C. You are measuring the wrong thing and thus reaching the wrong conclusions.",
        "D. All of the above."
      ],
      correctAnswer: "A"
    },
  {
      question: "Q. 51: Important consequences of the impossibility of complete testing are:",
      answers: [
        "A. We can never be certain that the program is bug free.",
        "B. We have no definite stopping point for testing, which makes it easier for some managers to argue for very little testing.",
        "C. We have no easy answer for what testing tasks should always be required, because every task takes time that could be spent on other high importance tasks.",
        "D. All of the above."
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 52: Poor software characteristics are:",
      answers: [
        "A. Only Project risks",
        "B. Only Product risks",
        "C. Project risks and Product risks",
        "D. Project risks or Product risks"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 53: System testing should investigate:",
      answers: [
        "A. Non-functional requirements only not Functional requirements",
        "B. Functional requirements only not non-functional requirements",
        "C. Non-functional requirements and Functional requirements",
        "D. Non-functional requirements or Functional requirements"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 54: Contract and regulation testing is a part of:",
      answers: [
        "A. System testing",
        "B. Acceptance testing",
        "C. Integration testing",
        "D. Smoke testing"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 55: Find the correct flow of the phases of a formal review:",
      answers: [
        "A. Planning, Review meeting, Rework, Kick off",
        "B. Planning, Individual preparation, Kick off, Rework",
        "C. Planning, Review meeting, Rework, Follow up",
        "D. Planning, Individual preparation, Follow up, Kick off"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 56: Which is not the testing objectives:",
      answers: [
        "A. Finding defects",
        "B. Gaining confidence about the level of quality and providing information",
        "C. Preventing defects.",
        "D. Debugging defects"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 57: Maintenance releases and technical assistance centers are examples of which of the following costs of quality?",
      answers: [
        "A. External failure",
        "B. Internal failure",
        "C. Appraisal",
        "D. Prevention"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 58: Which is not the project risks:",
      answers: [
        "A. Supplier issues",
        "B. Organization factors",
        "C. Technical issues",
        "D. Error-prone software delivered"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 59: Bug life cycle:",
      answers: [
        "A. Open, Assigned, Fixed, Closed",
        "B. Open, Fixed, Assigned, Closed",
        "C. Assigned, Open, Closed, Fixed",
        "D. Assigned, Open, Fixed, Closed"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 60: Who is responsible for documenting all the issues, problems, and open points identified during the review meeting?",
      answers: [
        "A. Moderator",
        "B. Scribe",
        "C. Reviewers",
        "D. Author"
      ],
      correctAnswer: "B"
    },
  {
      question: "Q. 61: ‘X’ has given data on a person's age, which should be between 1 to 99. Using BVA, which is the appropriate one?",
      answers: [
        "A. 0,1,2,99",
        "B. 1, 99, 100, 98",
        "C. 0, 1, 99, 100",
        "D. –1, 0, 1, 99"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 62: Which is not a testing principle?",
      answers: [
        "A. Early testing",
        "B. Defect clustering",
        "C. Pesticide paradox",
        "D. Exhaustive testing"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 63: A project in the implementation phase is six weeks behind schedule. The delivery date for the product is four months away. The project cannot slip the delivery date or compromise quality. Which action would bring the project back on schedule?",
      answers: [
        "A. Eliminate some of the requirements that have not yet been implemented.",
        "B. Add more engineers to the project to make up for lost work.",
        "C. Ask the current developers to work overtime until the lost work is recovered.",
        "D. Hire more software quality assurance personnel."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 64: The ___________ testing will be performed by the people at the client's own locations.",
      answers: [
        "A. Alpha testing",
        "B. Field testing",
        "C. Performance testing",
        "D. System testing"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 65: Which of the following is the standard for software product quality?",
      answers: [
        "A. ISO 1926",
        "B. ISO 829",
        "C. ISO 1012",
        "D. ISO 1028"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 66: Which is not a black-box testing technique?",
      answers: [
        "A. Equivalence partition",
        "B. Decision tables",
        "C. Transaction diagrams",
        "D. Decision testing"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 67: Find the mismatch.",
      answers: [
        "A. Test data preparation tools – Manipulate databases",
        "B. Test design tools – Generate test inputs",
        "C. Requirement management tools – Enables individual tests to be traceable",
        "D. Configuration management tools – Check for consistency"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 68: Use cases can be performed to test:",
      answers: [
        "A. Performance testing",
        "B. Unit testing",
        "C. Business scenarios",
        "D. Static testing"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 69: Purpose of test design technique is:",
      answers: [
        "A. Identifying test conditions only, not identifying test cases",
        "B. Not identifying test conditions, identifying test cases only",
        "C. Identifying test conditions and identifying test cases",
        "D. Identifying test conditions or identifying test cases"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 70: One person has been dominating the current software process improvement meeting. Which technique should the facilitator use to bring other team members into the discussion?",
      answers: [
        "A. Confront the person and ask that other team members be allowed to express their opinions.",
        "B. Wait for the person to pause, acknowledge their opinion, and ask for someone else’s opinion.",
        "C. Switch the topic to an issue about which the person does not have a strong opinion.",
        "D. Express an opinion that differs from the person’s opinion to encourage others to express their ideas."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 71: Stochastic testing using statistical information or operational profiles uses the following method:",
      answers: [
        "A. Heuristic testing approach",
        "B. Methodical testing approach",
        "C. Model based testing approach",
        "D. Process or standard compliant testing approach"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 72: A software model that can’t be used in functional testing:",
      answers: [
        "A. Process flow model",
        "B. State transaction model",
        "C. Menu structure model",
        "D. Plain language specification model"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 73: Arc testing is known as:",
      answers: [
        "A. Branch testing",
        "B. Agile testing",
        "C. Beta testing",
        "D. Ad-hoc testing"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 74: The purpose of exit criteria is:",
      answers: [
        "A. Define when to stop testing",
        "B. End of test level",
        "C. When a set of tests has achieved a specific pre-condition",
        "D. All of the above"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 75: The ___________ technique can be used to achieve input and output coverage:",
      answers: [
        "A. Boundary value analysis",
        "B. Equivalence partitioning",
        "C. Decision table testing",
        "D. State transition testing"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 76: The __________ testing is performed at the developing organization’s site:",
      answers: [
        "A. Unit testing",
        "B. Regression testing",
        "C. Alpha testing",
        "D. Integration testing"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 77: What is the main purpose of Informal review:",
      answers: [
        "A. Inexpensive way to get some benefit",
        "B. Find defects",
        "C. Learning, gaining understanding, effect finding",
        "D. Discuss, make decisions, solve technical problems"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 78: Which is not a Component testing:",
      answers: [
        "A. Check the memory leaks",
        "B. Check the robustness",
        "C. Check the branch coverage",
        "D. Check the decision tables"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 79: The software engineer's role in tool selection is:",
      answers: [
        "A. To identify, evaluate, and rank tools, and recommend tools to management",
        "B. To determine what kind of tool is needed, then find it and buy it",
        "C. To initiate the tool search and present a case to management",
        "D. To identify, evaluate and select the tools"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 80: Which is not the fundamental test process:",
      answers: [
        "A. Planning and control",
        "B. Test closure activities",
        "C. Analysis and design",
        "D. None"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 81: The ________ and ________ are used within individual workbenches to produce the right output products.",
      answers: [
        "A. Tools and techniques",
        "B. Procedures and standards",
        "C. Processes and walkthroughs",
        "D. Reviews and update"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 82: Which is not the software characteristics:",
      answers: [
        "A. Reliability",
        "B. Usability",
        "C. Scalability",
        "D. Maintainability"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 83: The principle of Cyclomatic complexity, considering L as edges or links, N as nodes, P as independent paths:",
      answers: [
        "A. L-N +2P",
        "B. N-L +2P",
        "C. N-L +P",
        "D. N-L +P"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 84: FPA is used to:",
      answers: [
        "A. To measure the functional requirements of the project",
        "B. To measure the size of the functionality of an Information system",
        "C. To measure the functional testing effort",
        "D. To measure the functional flow"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 85: A _____ is the step-by-step method followed to ensure that standards are met:",
      answers: [
        "A. SDLC",
        "B. Project Plan",
        "C. Policy",
        "D. Procedure"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 86: Which is not a test Oracle:",
      answers: [
        "A. The existing system (For a bench mark)",
        "B. The code",
        "C. Individual’s knowledge",
        "D. User manual"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 87: PDCA is known as:",
      answers: [
        "A. Plan, Do, Check, Act",
        "B. Plan, Do, Correct, Act",
        "C. Plan, Debug, Check, Act",
        "D. Plan, Do, Check, Accept"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 88: Which is the non-functional testing:",
      answers: [
        "A. Performance testing",
        "B. Unit testing",
        "C. Regression testing",
        "D. Sanity testing"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 89: A Test Plan Outline contains which of the following:",
      answers: [
        "i. Test Items",
        "ii. Test Scripts",
        "iii. Test Deliverables",
        "iv. Responsibilities"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 90: Testing where in we subject the target of the test, to varying workloads to measure and evaluate the performance behaviors and ability of the target and of the test to continue to function properly under these different workloads:",
      answers: [
        "A. Load Testing",
        "B. Integration Testing",
        "C. System Testing",
        "D. Usability Testing"
      ],
      correctAnswer: "A"
    },
  {
      question: "Q. 91: Which of the following is the task of a Tester?",
      answers: [
        "A. i, ii, iii is true and iv is false",
        "B. ii,iii,iv is true and i is false",
        "C. i is true and ii,iii,iv are false",
        "D. iii and iv is correct and i and ii are incorrect"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 92: What can static analysis NOT find?",
      answers: [
        "A. The use of a variable before it has been defined",
        "B. Unreachable ('dead') code",
        "C. Memory leaks",
        "D. Array bound violations"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 93: White Box Techniques are also called as:",
      answers: [
        "A. Structural Testing",
        "B. Design Based Testing",
        "C. Error Guessing Technique",
        "D. Experience Based Technique"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 94: Reviewing the test Basis is a part of which phase:",
      answers: [
        "A. Test Analysis and Design",
        "B. Test Implementation and Execution",
        "C. Test Closure Activities",
        "D. Evaluating Exit Criteria and Reporting"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 95: Component Testing is also called as :-",
      answers: [
        "A. i,ii,iii are true and iv is false",
        "B. i,ii,iii,iv are false",
        "C. i,ii,iv are true and iii is false",
        "D. all of above is true"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 96: Which of the following is not a major task of Exit criteria?",
      answers: [
        "A. Checking test logs against the exit criteria specified in test planning.",
        "B. Logging the outcome of test execution.",
        "C. Assessing if more tests are needed.",
        "D. Writing a test summary report for stakeholders."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 97: Which of the following is true about Formal Review or Inspection:-",
      answers: [
        "A. ii is true and i,iii,iv are false",
        "B. i,iii,iv are true and ii is false",
        "C. i,iii,iv are false and ii is true",
        "D. iii is true and i,ii,iv are false"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 98: The Phases of formal review process is mentioned below arrange them in the correct order.",
      answers: [
        "A. i,ii,iii,iv,v,vi",
        "B. vi,i,ii,iii,iv,v",
        "C. i,v,iv,ii,iii,vi",
        "D. i,ii,iii,v,iv,vi"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 99: Testing activity which is performed to expose defects in the interfaces and in the interaction between integrated components is:",
      answers: [
        "A. System Level Testing",
        "B. Integration Level Testing",
        "C. Unit Level Testing",
        "D. Component Testing"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 100: Methodologies adopted while performing Maintenance Testing:-",
      answers: [
        "A. Breadth Test and Depth Test",
        "B. Re-testing",
        "C. Confirmation Testing",
        "D. Sanity Testing"
      ],
      correctAnswer: "A"
    },
  {
      question: "Q. 101: The Switch is switched off once the temperature falls below 18 and then it is turned on when the temperature is more than 21. Identify the Equivalence values which belong to the same class.",
      answers: [
        "A. 12,16,22",
        "B. 24,27,17",
        "C. 22,23,24",
        "D. 14,15,19"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 102: What is an equivalence partition (also known as an equivalence class)?",
      answers: [
        "A. A set of test cases for testing classes of objects",
        "B. An input or output range of values such that only one value in the range becomes a test case",
        "C. An input or output range of values such that each value in the range becomes a test case",
        "D. An input or output range of values such that every tenth value in the range becomes a test case."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 103: Which of the following is not a part of the Test Implementation and Execution Phase?",
      answers: [
        "A. Creating test suites from the test cases",
        "B. Executing test cases either manually or by using test execution tools",
        "C. Comparing actual results",
        "D. Designing the Tests"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 104: Link Testing is also called as:",
      answers: [
        "A. Component Integration testing",
        "B. Component System Testing",
        "C. Component Sub System Testing",
        "D. Maintenance testing"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 105: Who are the persons involved in a Formal Review?",
      answers: [
        "A. i,ii,iii,iv are true",
        "B. i,ii,iii are true and iv is false.",
        "C. ii,iii,iv are true and i is false.",
        "D. i,iv are true and ii, iii are false."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 106: Which of the following statements regarding static testing is false:",
      answers: [
        "A. Static testing requires the running of tests through the code",
        "B. Static testing includes desk checking",
        "C. Static testing includes techniques such as reviews and inspections",
        "D. Static testing can give measurements such as cyclomatic complexity"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 107: Designing the test environment set-up and identifying any required infrastructure and tools are a part of which phase?",
      answers: [
        "A. Test Implementation and execution",
        "B. Test Analysis and Design",
        "C. Evaluating the Exit Criteria and reporting",
        "D. Test Closure Activities"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 108: A Type of functional Testing, which investigates the functions relating to detection of threats, such as virus from malicious outsiders.",
      answers: [
        "A. Security Testing",
        "B. Recovery Testing",
        "C. Performance Testing",
        "D. Functionality Testing"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 109: A Person who documents all the issues, problems and open points that were identified during a formal review.",
      answers: [
        "A. Moderator",
        "B. Scribe",
        "C. Author",
        "D. Manager"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 110: The Test Cases Derived from use cases:",
      answers: [
        "A. Are most useful in uncovering defects in the process flows during real world use of the system",
        "B. Are most useful in uncovering defects in the process flows during the testing use of the system",
        "C. Are most useful in covering the defects in the process flows during real world use of the system",
        "D. Are most useful in covering the defects at the Integration Level"
      ],
      correctAnswer: "A"
    },
   {
      question: "Q. 111: One of the fields on a form contains a text box which accepts alphanumeric values. Identify the Valid Equivalence class.",
      answers: [
        "A. BOOK",
        "B. Book",
        "C. Boo01k",
        "D. book"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 112: In an Examination a candidate has to score a minimum of 24 marks in order to clear the exam. The maximum that he can score is 40 marks. Identify the Valid Equivalence values if the student clears the exam.",
      answers: [
        "A. 22,23,26",
        "B. 21,39,40",
        "C. 29,30,31",
        "D. 0,15,22"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 113: Verification involves which of the following:",
      answers: [
        "i. Helps to check the Quality of the built product",
        "ii. Helps to check that we have built the right product.",
        "iii. Helps in developing the product",
        "iv. Monitoring tool wastage and obsolescence."
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 114: A Project risk includes which of the following:",
      answers: [
        "A. Organizational Factors",
        "B. Poor Software characteristics",
        "C. Error Prone software delivered.",
        "D. Software that does not perform its intended functions"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 115: Which of the following is a Key Characteristics of Walk Through",
      answers: [
        "A. Scenario, Dry Run, Peer Group",
        "B. Pre Meeting Preparations",
        "C. Formal Follow Up Process",
        "D. Includes Metrics"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 116: Which of the following techniques is NOT a White box technique?",
      answers: [
        "A. Statement Testing and coverage",
        "B. Decision Testing and coverage",
        "C. Condition Coverage",
        "D. Boundary value analysis"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 117: Reporting Discrepancies as incidents is a part of which phase :-",
      answers: [
        "A. Test Analysis and Design",
        "B. Test Implementation and execution",
        "C. Test Closure Activities",
        "D. Evaluating exit criteria and reporting"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 118: In a risk-based approach the risks identified may be used to :",
      answers: [
        "i. Determine the test technique to be employed",
        "ii. Determine the extent of testing to be carried out",
        "iii. Prioritize testing in an attempt to find critical defects as early as possible.",
        "iv. Determine the cost of the project"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 119: Incidents would not be raised against:",
      answers: [
        "A. Requirements",
        "B. Documentation",
        "C. Test cases",
        "D. Improvements suggested by users"
      ],
      correctAnswer: "D"
    },
    {
      question: "Q. 120: The Planning phase of a formal review includes the following :-",
      answers: [
        "A. Explaining the objectives",
        "B. Selecting the personnel, allocating roles.",
        "C. Follow up",
        "D. Individual Meeting preparations"
      ],
      correctAnswer: "B"
    },
    {
      question: "Q. 121: Test Implementation and execution has which of the following major tasks?",
      answers: [
        "i. Developing and prioritizing test cases, creating test data, writing test procedures and optionally preparing the test harnesses and writing automated test scripts.",
        "ii. Creating the test suite from the test cases for efficient test execution.",
        "iii. Verifying that the test environment has been set up correctly.",
        "iv. Determining the exit criteria."
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 122: One of the fields on a form contains a text box which accepts numeric values in the range of 18 to 25. Identify the invalid Equivalence class",
      answers: [
        "A. 17",
        "B. 19",
        "C. 24",
        "D. 21"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 123: Exhaustive Testing is",
      answers: [
        "A. Is impractical but possible",
        "B. Is practically possible",
        "C. Is impractical and impossible",
        "D. Is always possible"
      ],
      correctAnswer: "A"
    },
    {
      question: "Q. 124: Hand over of Testware is a part of which Phase",
      answers: [
        "A. Test Analysis and Design",
        "B. Test Planning and control",
        "C. Test Closure Activities",
        "D. Evaluating exit criteria and reporting"
      ],
      correctAnswer: "C"
    },
    {
      question: "Q. 125: Which one is not comes under international standard",
      answers: [
        "A. IEC",
        "B. IEEE",
        "C. ISO",
        "D. All of the above"
      ],
      correctAnswer: "B"
    }
  ];
  export default questions