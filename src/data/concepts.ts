import type { Concept } from '../types/concept';

export const concepts: Concept[] = [
  // Foundation Layer - Mathematics Basics
  {
    id: 'numbers',
    title: 'Numbers',
    description: 'Understanding counting and basic number concepts - the foundation of all mathematics.',
    explanation: `Numbers are the fundamental building blocks of mathematics. They started as a way to count things - how many sheep in a flock, how many days until harvest.

**Natural Numbers** (1, 2, 3, ...) are the counting numbers we learn first. They're called "natural" because they come naturally to humans.

**Zero** was a revolutionary invention. It represents "nothing," but having a symbol for nothing allows us to do so much more with mathematics.

**Negative Numbers** extend our number line in the other direction. If positive numbers represent gains, negative numbers represent losses.

**The Number Line** is a visual way to see all these numbers in order. Zero sits in the middle, positives go right, negatives go left.`,
    emoji: '🔢',
    category: 'mathematics',
    difficulty: 'beginner',
    prerequisites: [],
    estimatedTime: '5 min',
    keyPoints: [
      'Natural numbers (1, 2, 3...)',
      'Zero and its importance',
      'Negative numbers',
      'Number line visualization',
    ],
  },
  {
    id: 'addition',
    title: 'Addition',
    description: 'Combining quantities together - your first mathematical operation.',
    explanation: `Addition is the operation of combining quantities. When you put 3 apples with 2 apples, you get 5 apples.

**The Commutative Property** says that order doesn't matter: 3 + 5 = 5 + 3.

**The Associative Property** says grouping doesn't matter: (2 + 3) + 4 = 2 + (3 + 4).

**The Identity Element** for addition is 0. Adding zero to any number gives you that same number back: 7 + 0 = 7.

Addition is everywhere: counting money, measuring distances, tracking scores. It's the foundation for more complex operations like multiplication.`,
    emoji: '➕',
    category: 'mathematics',
    difficulty: 'beginner',
    prerequisites: ['numbers'],
    estimatedTime: '10 min',
    keyPoints: [
      'Adding two numbers',
      'Commutative property (a + b = b + a)',
      'Adding multiple numbers',
      'Real-world applications',
    ],
  },
  {
    id: 'subtraction',
    title: 'Subtraction',
    description: 'Taking away quantities - the inverse of addition.',
    explanation: `Subtraction is the inverse of addition - it "undoes" what addition does. If 3 + 2 = 5, then 5 - 2 = 3.

**Unlike addition, subtraction is NOT commutative**: 5 - 3 ≠ 3 - 5. Order matters!

**Negative Results**: When you subtract a larger number from a smaller one, you get a negative result. 3 - 5 = -2.

**Subtracting Negative Numbers**: Subtracting a negative is like adding a positive: 5 - (-3) = 5 + 3 = 8.`,
    emoji: '➖',
    category: 'mathematics',
    difficulty: 'beginner',
    prerequisites: ['numbers'],
    estimatedTime: '10 min',
    keyPoints: [
      'Taking away from a number',
      'Relationship with addition',
      'Negative results',
      'Finding differences',
    ],
  },
  {
    id: 'multiplication',
    title: 'Multiplication',
    description: 'Repeated addition made simple - scaling quantities.',
    explanation: `Multiplication is repeated addition. 4 × 3 means "add 4 three times": 4 + 4 + 4 = 12.

**Scaling Interpretation**: 4 × 3 means "scale 4 by a factor of 3" or "make 4 three times as big."

**The Commutative Property**: Like addition, order doesn't matter: 4 × 3 = 3 × 4 = 12.

**The Distributive Property**: This connects multiplication to addition: 3 × (4 + 2) = 3 × 4 + 3 × 2 = 18.

**Special Cases**: Multiplying by 1 gives the same number. Multiplying by 0 gives 0.`,
    emoji: '✖️',
    category: 'mathematics',
    difficulty: 'beginner',
    prerequisites: ['addition'],
    estimatedTime: '15 min',
    keyPoints: [
      'Multiplication as repeated addition',
      'Times tables',
      'Commutative property',
      'Multiplying by zero and one',
    ],
  },
  {
    id: 'division',
    title: 'Division',
    description: 'Splitting into equal parts - the inverse of multiplication.',
    explanation: `Division is the inverse of multiplication. If 4 × 3 = 12, then 12 ÷ 3 = 4 and 12 ÷ 4 = 3.

**Two Ways to Think About Division**:
1. **Sharing**: 12 ÷ 3 = "12 items shared among 3 people gives 4 each"
2. **Grouping**: 12 ÷ 3 = "How many groups of 3 fit into 12? Answer: 4"

**Division is NOT Commutative**: 12 ÷ 3 ≠ 3 ÷ 12. Order matters!

**Division by Zero is Undefined**: There's no number that, when multiplied by 0, gives 12.

**Fractions are Division**: The fraction 3/4 literally means 3 ÷ 4.`,
    emoji: '➗',
    category: 'mathematics',
    difficulty: 'beginner',
    prerequisites: ['multiplication', 'subtraction'],
    estimatedTime: '15 min',
    keyPoints: [
      'Sharing equally',
      'Division as inverse of multiplication',
      'Remainders',
      'Division by zero (undefined!)',
    ],
  },
  {
    id: 'fractions',
    title: 'Fractions',
    description: 'Parts of a whole - understanding portions and ratios.',
    explanation: `Fractions represent parts of a whole. The fraction 3/4 means "3 parts out of 4 equal parts."

**Anatomy of a Fraction**:
- **Numerator** (top): How many parts you have
- **Denominator** (bottom): How many equal parts make a whole

**Equivalent Fractions**: 1/2 = 2/4 = 3/6 = 50/100. These all represent the same amount!

**Operations with Fractions**:
- **Addition/Subtraction**: Need common denominators: 1/4 + 1/2 = 1/4 + 2/4 = 3/4
- **Multiplication**: Multiply across: 2/3 × 3/4 = 6/12 = 1/2
- **Division**: Flip and multiply: 2/3 ÷ 3/4 = 2/3 × 4/3 = 8/9`,
    emoji: '🍕',
    category: 'mathematics',
    difficulty: 'intermediate',
    prerequisites: ['division'],
    estimatedTime: '20 min',
    keyPoints: [
      'Numerator and denominator',
      'Equivalent fractions',
      'Simplifying fractions',
      'Comparing fractions',
    ],
  },
  {
    id: 'decimals',
    title: 'Decimals',
    description: 'Another way to represent fractions - using the base-10 system.',
    explanation: `Decimals are just another way to write fractions, using our base-10 number system.

**Place Values**: Each position after the decimal point represents a power of 10:
- 0.1 = 1/10 (tenths)
- 0.01 = 1/100 (hundredths)
- 0.001 = 1/1000 (thousandths)

**Converting Fractions to Decimals**: Just divide! 3/4 = 3 ÷ 4 = 0.75

**Repeating Decimals**: Some fractions don't convert neatly: 1/3 = 0.333... (repeating forever)

**Why Decimals?**: They make calculations easier, especially with calculators and computers.`,
    emoji: '🔣',
    category: 'mathematics',
    difficulty: 'intermediate',
    prerequisites: ['fractions'],
    estimatedTime: '15 min',
    keyPoints: [
      'Decimal place values',
      'Converting fractions to decimals',
      'Rounding decimals',
      'Operations with decimals',
    ],
  },
  {
    id: 'percentages',
    title: 'Percentages',
    description: 'Parts per hundred - essential for everyday calculations.',
    explanation: `Percent means "per hundred." 50% means 50 per 100, or 50/100, or 0.50, or simply 1/2.

**The Magic Triangle**: Fraction ↔ Decimal ↔ Percentage
- 1/4 = 0.25 = 25%
- 3/5 = 0.60 = 60%

**Finding Percentages of Numbers**:
What is 20% of 150? 150 × 0.20 = 30

**Percentage Increase/Decrease**:
Formula: ((New - Old) / Old) × 100%

**Common Percentages to Memorize**:
- 50% = 1/2, 25% = 1/4, 10% = 1/10, 1% = 1/100`,
    emoji: '%',
    category: 'mathematics',
    difficulty: 'intermediate',
    prerequisites: ['decimals', 'fractions'],
    estimatedTime: '15 min',
    keyPoints: [
      'Percentage as "per 100"',
      'Converting between fractions, decimals, and percentages',
      'Finding percentages of numbers',
      'Percentage increase and decrease',
    ],
  },
  {
    id: 'algebra-basics',
    title: 'Algebra Basics',
    description: 'Using letters for numbers - the language of mathematics.',
    explanation: `Algebra uses letters (called variables) to represent unknown or changeable numbers.

**Variables**: A letter like x, y, or n that stands for a number. In the equation x + 5 = 12, we're asking "what number plus 5 equals 12?"

**Solving Equations**: Use inverse operations to isolate the variable:
x + 5 = 12 → x = 12 - 5 → x = 7

**The Golden Rule**: Whatever you do to one side of an equation, you must do to the other side.

**Why Algebra Matters**: It lets us describe patterns, relationships, and solve problems where we don't know all the numbers yet.`,
    emoji: '🔤',
    category: 'mathematics',
    difficulty: 'intermediate',
    prerequisites: ['multiplication', 'division'],
    estimatedTime: '25 min',
    keyPoints: [
      'Variables represent unknown values',
      'Simple equations',
      'Solving for x',
      'Algebraic expressions',
    ],
  },
  {
    id: 'exponents',
    title: 'Exponents',
    description: 'Repeated multiplication - powers and their properties.',
    explanation: `Just as multiplication is repeated addition, exponents are repeated multiplication.

**The Basics**: 2³ = 2 × 2 × 2 = 8
- Base: the number being multiplied (2)
- Exponent: how many times to multiply (3)

**Special Cases**:
- x¹ = x (anything to the power of 1 is itself)
- x⁰ = 1 (anything to the power of 0 is 1)

**Laws of Exponents**:
- xᵃ × xᵇ = xᵃ⁺ᵇ (same base: add exponents)
- xᵃ ÷ xᵇ = xᵃ⁻ᵇ (same base: subtract exponents)
- (xᵃ)ᵇ = xᵃˣᵇ (power of a power: multiply exponents)

**Negative Exponents**: x⁻ⁿ = 1/xⁿ`,
    emoji: '²',
    category: 'mathematics',
    difficulty: 'intermediate',
    prerequisites: ['multiplication', 'algebra-basics'],
    estimatedTime: '20 min',
    keyPoints: [
      'Base and exponent',
      'Squares and cubes',
      'Laws of exponents',
      'Negative exponents',
    ],
  },
  {
    id: 'logarithms',
    title: 'Logarithms',
    description: 'The inverse of exponents - essential for advanced math.',
    explanation: `Logarithms answer the question: "What power do I need?" If 2³ = 8, then log₂(8) = 3.

**The Key Relationship**: If bˣ = y, then logᵦ(y) = x
The logarithm is the exponent!

**Common Logarithms**:
- log₁₀(x) or just log(x) - base 10
- ln(x) - natural log, base e ≈ 2.718

**Logarithm Properties**:
- log(xy) = log(x) + log(y)
- log(x/y) = log(x) - log(y)
- log(xⁿ) = n·log(x)

**Why Logarithms Matter**: Earthquakes (Richter scale), sound (decibels), and algorithm complexity all use logarithms.`,
    emoji: '📊',
    category: 'mathematics',
    difficulty: 'advanced',
    prerequisites: ['exponents'],
    estimatedTime: '30 min',
    keyPoints: [
      'Logarithm as inverse of exponent',
      'Common and natural logarithms',
      'Logarithm properties',
      'Applications in science',
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    description: 'Input-output machines - mapping relationships between values.',
    explanation: `A function is like a machine: put something in, get something out. Each input gives exactly one output.

**Function Notation**: f(x) = 2x + 3
- f is the name of the function
- x is the input
- 2x + 3 is the rule
- If x = 5, then f(5) = 2(5) + 3 = 13

**Domain and Range**:
- **Domain**: All possible inputs
- **Range**: All possible outputs

**Types of Functions**:
- **Linear**: f(x) = mx + b (straight line)
- **Quadratic**: f(x) = x² (parabola)
- **Exponential**: f(x) = 2ˣ (rapid growth)

**Function Composition**: Chaining functions together (g ∘ f)(x) = g(f(x))`,
    emoji: '⚙️',
    category: 'mathematics',
    difficulty: 'advanced',
    prerequisites: ['algebra-basics', 'exponents'],
    estimatedTime: '30 min',
    keyPoints: [
      'Function notation f(x)',
      'Domain and range',
      'Linear vs non-linear functions',
      'Graphing functions',
    ],
  },

  // Programming concepts
  {
    id: 'variables-prog',
    title: 'Variables',
    description: 'Containers for storing data - the building blocks of programs.',
    explanation: `Variables in programming are named containers that hold values. Think of them as labeled boxes where you can store and retrieve data.

**Declaring Variables**:
In JavaScript, you use let or const to declare variables.

**Variable Names**: Choose descriptive names! userAge is better than x.

**Data Types**: String (text), Number, Boolean (true/false), Null/Undefined.

**Let vs Const**: let can change, const cannot change (use when possible).

**Why Variables Matter**: Programs need to remember things - user input, calculations, state.`,
    emoji: '📦',
    category: 'programming',
    difficulty: 'beginner',
    prerequisites: [],
    estimatedTime: '10 min',
    keyPoints: [
      'Naming variables',
      'Data types (numbers, strings, booleans)',
      'Assignment operator',
      'Variable scope',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Declaring Variables',
        code: `// String (text)
let name = "Alice";

// Number
let age = 25;

// Boolean (true/false)
let isStudent = true;

// Const cannot be reassigned
const PI = 3.14159;

// Updating a variable
age = 26;  // Now age is 26`
      },
      {
        language: 'python',
        title: 'Variables in Python',
        code: `# Python doesn't need let/const
name = "Alice"
age = 25
is_student = True

# Multiple assignment
x, y, z = 1, 2, 3`
      }
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals',
    description: 'Making decisions in code - if this, then that.',
    explanation: `Conditionals let your program make decisions based on conditions.

**Basic If Statement**: Check if a condition is true and run code.

**If-Else**: Two branches for true or false.

**If-Else If-Else**: Multiple branches for different conditions.

**Comparison Operators**: === (equal), !== (not equal), > (greater), < (less)

**Logical Operators**: && (AND), || (OR), ! (NOT)`,
    emoji: '🔀',
    category: 'programming',
    difficulty: 'beginner',
    prerequisites: ['variables-prog'],
    estimatedTime: '15 min',
    keyPoints: [
      'If statements',
      'Else and else-if',
      'Comparison operators',
      'Boolean logic',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'If-Else Statements',
        code: `const temperature = 25;

if (temperature > 30) {
  console.log("It's hot!");
} else if (temperature > 20) {
  console.log("It's nice!");
} else {
  console.log("It's cold!");
}

// Output: "It's nice!"`
      },
      {
        language: 'javascript',
        title: 'Logical Operators',
        code: `const age = 25;
const hasLicense = true;

// AND: both must be true
if (age >= 18 && hasLicense) {
  console.log("You can drive!");
}

// OR: at least one must be true
if (age < 18 || !hasLicense) {
  console.log("You cannot drive");
}`
      }
    ],
  },
  {
    id: 'loops',
    title: 'Loops',
    description: 'Repeating actions - doing things over and over.',
    explanation: `Loops let you repeat code without writing it multiple times.

**For Loop**: Use when you know how many times to repeat.

**While Loop**: Use when you don't know how many times.

**For...of Loop**: Great for iterating over arrays.

**Loop Control**: break exits the loop, continue skips to next iteration.

**Warning**: Avoid infinite loops! Always have a way to stop.`,
    emoji: '🔁',
    category: 'programming',
    difficulty: 'beginner',
    prerequisites: ['conditionals'],
    estimatedTime: '20 min',
    keyPoints: [
      'For loops',
      'While loops',
      'Loop control (break, continue)',
      'Avoiding infinite loops',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'For Loop',
        code: `// Print numbers 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0, 1, 2, 3, 4

// Loop through an array
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}`
      },
      {
        language: 'javascript',
        title: 'While Loop',
        code: `let count = 0;

while (count < 3) {
  console.log("Count is: " + count);
  count++;
}
// Output: Count is: 0, Count is: 1, Count is: 2

// Break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // Skip 3
  if (i === 7) break;     // Stop at 7
  console.log(i);
}
// Output: 0, 1, 2, 4, 5, 6`
      }
    ],
  },
  {
    id: 'functions-prog',
    title: 'Functions',
    description: 'Reusable code blocks - organizing and simplifying programs.',
    explanation: `Functions are reusable blocks of code. Write once, use many times.

**Defining a Function**: Use the function keyword or arrow syntax.

**Calling a Function**: Use the function name with parentheses.

**Parameters and Arguments**: Parameters are in the definition, arguments are the actual values.

**Return Values**: Functions can send back a result with return.

**Why Functions Matter**: DRY (Don't Repeat Yourself), abstraction, easier testing.`,
    emoji: '🧩',
    category: 'programming',
    difficulty: 'intermediate',
    prerequisites: ['loops'],
    estimatedTime: '25 min',
    keyPoints: [
      'Defining functions',
      'Parameters and arguments',
      'Return values',
      'Function scope',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Function Basics',
        code: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Calling the function
const message = greet("Alice");
console.log(message);  // "Hello, Alice!"

// Arrow function (modern syntax)
const add = (a, b) => a + b;
console.log(add(2, 3));  // 5`
      },
      {
        language: 'python',
        title: 'Functions in Python',
        code: `def greet(name):
    return f"Hello, {name}!"

# With default parameter
def power(base, exponent=2):
    return base ** exponent

print(greet("Alice"))  # Hello, Alice!
print(power(3))        # 9
print(power(2, 4))     # 16`
      }
    ],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Lists of data - storing multiple values together.',
    explanation: `Arrays are ordered collections of values.

**Creating Arrays**: Use square brackets with comma-separated values.

**Accessing Elements**: Arrays are zero-indexed, meaning the first element is at index 0.

**Common Methods**: push, pop, map, filter, reduce are essential array methods.

**Iterating**: Use for...of or forEach to loop through arrays.`,
    emoji: '📚',
    category: 'programming',
    difficulty: 'intermediate',
    prerequisites: ['loops', 'variables-prog'],
    estimatedTime: '20 min',
    keyPoints: [
      'Creating arrays',
      'Indexing (zero-based)',
      'Array methods',
      'Iterating over arrays',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Array Basics',
        code: `// Creating an array
const fruits = ["apple", "banana", "cherry"];

// Accessing elements (zero-indexed!)
console.log(fruits[0]);  // "apple"
console.log(fruits[2]);  // "cherry"

// Array length
console.log(fruits.length);  // 3

// Adding and removing
fruits.push("date");      // Add to end
const last = fruits.pop(); // Remove from end`
      },
      {
        language: 'javascript',
        title: 'Array Methods',
        code: `const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - combine into single value
const sum = numbers.reduce((a, b) => a + b, 0);
// 15`
      }
    ],
  },
  {
    id: 'objects',
    title: 'Objects',
    description: 'Complex data structures - grouping related data together.',
    explanation: `Objects store data as key-value pairs. Perfect for representing real-world things.

**Creating Objects**: Use curly braces with key: value pairs.

**Accessing Properties**: Use dot notation or bracket notation.

**Methods**: Functions inside objects.

**Destructuring**: Extract properties into variables.

**Nested Objects**: Objects can contain other objects for complex data.`,
    emoji: '🗃️',
    category: 'programming',
    difficulty: 'intermediate',
    prerequisites: ['arrays', 'functions-prog'],
    estimatedTime: '25 min',
    keyPoints: [
      'Key-value pairs',
      'Accessing properties',
      'Methods',
      'Object destructuring',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Object Basics',
        code: `const person = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "coding"],
  greet() {
    return "Hi, I'm " + this.name;
  }
};

// Accessing properties
console.log(person.name);     // "Alice"
console.log(person["age"]);   // 30

// Calling methods
console.log(person.greet());  // "Hi, I'm Alice"`
      },
      {
        language: 'javascript',
        title: 'Destructuring',
        code: `const person = { name: "Alice", age: 30, city: "NYC" };

// Destructuring assignment
const { name, age } = person;
console.log(name);  // "Alice"
console.log(age);   // 30

// With renaming
const { name: userName } = person;
console.log(userName);  // "Alice"

// Spread operator
const updated = { ...person, age: 31 };
// { name: "Alice", age: 31, city: "NYC" }`
      }
    ],
  },
  {
    id: 'recursion',
    title: 'Recursion',
    description: 'Functions calling themselves - elegant problem solving.',
    explanation: `Recursion is when a function calls itself. It's powerful for problems that can be broken into smaller versions of the same problem.

**Two Essential Parts**:
1. **Base Case**: When to stop (prevents infinite recursion)
2. **Recursive Case**: The function calling itself with a smaller problem

**Classic Recursive Problems**: Factorial, Fibonacci, tree traversal, divide and conquer.

**Warning**: Always have a base case! Without it, you get infinite recursion and a stack overflow.`,
    emoji: '🪞',
    category: 'programming',
    difficulty: 'advanced',
    prerequisites: ['functions-prog'],
    estimatedTime: '30 min',
    keyPoints: [
      'Base case',
      'Recursive case',
      'Call stack',
      'Recursion vs iteration',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Factorial',
        code: `function factorial(n) {
  // Base case: stop when n is 1 or less
  if (n <= 1) return 1;
  
  // Recursive case: n! = n × (n-1)!
  return n * factorial(n - 1);
}

console.log(factorial(5));  // 120
// 5! = 5 × 4 × 3 × 2 × 1 = 120`
      },
      {
        language: 'javascript',
        title: 'Fibonacci',
        code: `function fibonacci(n) {
  // Base cases
  if (n <= 0) return 0;
  if (n === 1) return 1;
  
  // Recursive case: fib(n) = fib(n-1) + fib(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21...
console.log(fibonacci(7));  // 13`
      }
    ],
  },
  {
    id: 'algorithms',
    title: 'Algorithms',
    description: 'Step-by-step problem solving - the heart of computer science.',
    explanation: `An algorithm is a step-by-step procedure for solving a problem.

**Big O Notation** - Measuring Efficiency:
- O(1) - Constant: Same time regardless of input size
- O(log n) - Logarithmic: Doubles input, adds one step
- O(n) - Linear: Time grows with input size
- O(n²) - Quadratic: Nested loops, avoid for large inputs!

**Searching**: Linear search O(n), Binary search O(log n)

**Sorting**: Bubble sort O(n²), Merge sort O(n log n)

**Why Algorithms Matter**: The difference between O(n) and O(n²) can mean seconds vs hours.`,
    emoji: '🧮',
    category: 'programming',
    difficulty: 'advanced',
    prerequisites: ['recursion', 'arrays'],
    estimatedTime: '40 min',
    keyPoints: [
      'Algorithm design',
      'Time complexity (Big O)',
      'Space complexity',
      'Common algorithms',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Binary Search - O(log n)',
        code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;  // Not found
}

const sorted = [1, 3, 5, 7, 9, 11, 13];
console.log(binarySearch(sorted, 7));  // 3`
      },
      {
        language: 'javascript',
        title: 'Merge Sort - O(n log n)',
        code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
}`
      }
    ],
  },

  // Data Structures
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    description: 'A chain of nodes - dynamic data storage.',
    explanation: `A linked list is a linear data structure where elements are stored in nodes, and each node points to the next one.

**Node Structure**: Each node contains data and a reference (pointer) to the next node.

**Types**:
- **Singly Linked**: Each node points to the next
- **Doubly Linked**: Each node points to both next and previous

**Advantages**: Dynamic size, efficient insertions/deletions at any position.

**Disadvantages**: No random access (must traverse from head), extra memory for pointers.`,
    emoji: '🔗',
    category: 'programming',
    difficulty: 'intermediate',
    prerequisites: ['objects', 'arrays'],
    estimatedTime: '30 min',
    keyPoints: [
      'Node structure',
      'Head and tail pointers',
      'Insertion and deletion',
      'Traversal',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Linked List Implementation',
        code: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}`
      }
    ],
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'Last In, First Out - like a stack of plates.',
    explanation: `A stack is a LIFO (Last In, First Out) data structure. The last element added is the first one removed.

**Core Operations**:
- **push**: Add element to top
- **pop**: Remove element from top
- **peek**: Look at top without removing

**Real-World Examples**: Undo functionality, browser back button, function call stack.

**Time Complexity**: All operations are O(1)!`,
    emoji: '📥',
    category: 'programming',
    difficulty: 'intermediate',
    prerequisites: ['arrays'],
    estimatedTime: '20 min',
    keyPoints: [
      'LIFO principle',
      'Push and pop operations',
      'Call stack in programming',
      'Undo/redo functionality',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Stack with Array',
        code: `class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // 3 (last in, first out)`
      }
    ],
  },
  {
    id: 'queues',
    title: 'Queues',
    description: 'First In, First Out - like a line at a store.',
    explanation: `A queue is a FIFO (First In, First Out) data structure. The first element added is the first one removed.

**Core Operations**:
- **enqueue**: Add element to back
- **dequeue**: Remove element from front
- **front**: Look at front without removing

**Real-World Examples**: Print queue, task scheduling, message queues.

**Variants**: Priority queue, circular queue, double-ended queue (deque).`,
    emoji: '📤',
    category: 'programming',
    difficulty: 'intermediate',
    prerequisites: ['arrays'],
    estimatedTime: '20 min',
    keyPoints: [
      'FIFO principle',
      'Enqueue and dequeue',
      'Task scheduling',
      'BFS traversal uses queues',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Queue Implementation',
        code: `class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
console.log(queue.dequeue());  // "A" (first in, first out)`
      }
    ],
  },
  {
    id: 'hash-tables',
    title: 'Hash Tables',
    description: 'Key-value lookup in O(1) - the power of hashing.',
    explanation: `A hash table (hash map) stores key-value pairs with near-instant lookup using a hash function.

**How It Works**:
1. Hash function converts key to array index
2. Value is stored at that index
3. Lookup: hash the key, go directly to index

**Collision Handling**: When two keys hash to same index.
- **Chaining**: Store multiple items at same index (linked list)
- **Open Addressing**: Find next empty slot

**Time Complexity**: Average O(1) for insert, delete, lookup!`,
    emoji: '#️⃣',
    category: 'programming',
    difficulty: 'advanced',
    prerequisites: ['arrays', 'functions-prog'],
    estimatedTime: '30 min',
    keyPoints: [
      'Hash function',
      'Key-value pairs',
      'Collision handling',
      'O(1) average lookup',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Using JavaScript Map',
        code: `// JavaScript has built-in Map
const users = new Map();

// Set key-value pairs
users.set("alice", { age: 25, email: "alice@example.com" });
users.set("bob", { age: 30, email: "bob@example.com" });

// Get value by key - O(1)!
console.log(users.get("alice"));  // { age: 25, ... }

// Check if key exists
console.log(users.has("charlie"));  // false

// Delete
users.delete("bob");`
      },
      {
        language: 'javascript',
        title: 'Simple Hash Table',
        code: `class HashTable {
  constructor(size = 53) {
    this.table = new Array(size);
  }

  hash(key) {
    let total = 0;
    for (let char of key) {
      total = (total + char.charCodeAt(0)) % this.table.length;
    }
    return total;
  }

  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    return this.table[this.hash(key)];
  }
}`
      }
    ],
  },
  {
    id: 'trees',
    title: 'Trees',
    description: 'Hierarchical data structures - branches of data.',
    explanation: `A tree is a hierarchical data structure with nodes connected by edges, starting from a root node.

**Terminology**:
- **Root**: Top node (no parent)
- **Children**: Nodes below a parent
- **Leaf**: Node with no children
- **Depth/Height**: Levels in the tree

**Binary Tree**: Each node has at most 2 children.

**Binary Search Tree (BST)**: Left child < parent < right child.

**Traversals**: Inorder, Preorder, Postorder, Level-order.`,
    emoji: '🌳',
    category: 'programming',
    difficulty: 'advanced',
    prerequisites: ['recursion', 'objects'],
    estimatedTime: '40 min',
    keyPoints: [
      'Root, nodes, leaves',
      'Binary search trees',
      'Tree traversals',
      'Balanced vs unbalanced',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Binary Search Tree',
        code: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    this._insertNode(this.root, node);
  }

  _insertNode(current, node) {
    if (node.value < current.value) {
      if (!current.left) current.left = node;
      else this._insertNode(current.left, node);
    } else {
      if (!current.right) current.right = node;
      else this._insertNode(current.right, node);
    }
  }
}`
      },
      {
        language: 'javascript',
        title: 'Tree Traversals',
        code: `// Inorder: Left, Root, Right (sorted order for BST)
function inorder(node) {
  if (!node) return;
  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
}

// Preorder: Root, Left, Right
function preorder(node) {
  if (!node) return;
  console.log(node.value);
  preorder(node.left);
  preorder(node.right);
}

// Postorder: Left, Right, Root
function postorder(node) {
  if (!node) return;
  postorder(node.left);
  postorder(node.right);
  console.log(node.value);
}`
      }
    ],
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Networks of connected nodes - modeling relationships.',
    explanation: `A graph is a collection of nodes (vertices) connected by edges. Graphs model relationships and networks.

**Types**:
- **Directed**: Edges have direction (A → B)
- **Undirected**: Edges go both ways
- **Weighted**: Edges have values (distances, costs)

**Representations**:
- **Adjacency Matrix**: 2D array of connections
- **Adjacency List**: Array of neighbors for each node

**Algorithms**: BFS, DFS, Dijkstra, A* are common graph algorithms.`,
    emoji: '🕸️',
    category: 'programming',
    difficulty: 'advanced',
    prerequisites: ['trees', 'queues'],
    estimatedTime: '45 min',
    keyPoints: [
      'Vertices and edges',
      'Directed vs undirected',
      'BFS and DFS traversal',
      'Shortest path algorithms',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Graph with Adjacency List',
        code: `class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList.get(v1).push(v2);
    this.adjacencyList.get(v2).push(v1);  // Undirected
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");`
      },
      {
        language: 'javascript',
        title: 'Breadth-First Search',
        code: `function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];

  visited.add(start);

  while (queue.length > 0) {
    const vertex = queue.shift();
    result.push(vertex);

    for (const neighbor of graph.adjacencyList.get(vertex)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }

  return result;
}`
      }
    ],
  },

  // Advanced Programming Concepts
  {
    id: 'closures',
    title: 'Closures',
    description: 'Functions that remember their environment.',
    explanation: `A closure is a function that has access to variables from its outer (enclosing) scope, even after the outer function has returned.

**How It Works**: When a function is created, it captures references to variables in its surrounding scope.

**Use Cases**:
- Data privacy (private variables)
- Function factories
- Callbacks and event handlers
- Memoization

**Memory**: Closures keep references alive, so be careful with memory usage.`,
    emoji: '📦',
    category: 'programming',
    difficulty: 'advanced',
    prerequisites: ['functions-prog'],
    estimatedTime: '25 min',
    keyPoints: [
      'Lexical scope',
      'Function factories',
      'Private variables',
      'Memory considerations',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Counter with Private State',
        code: `function createCounter() {
  let count = 0;  // Private variable
  
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount() { return count; }
  };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getCount());   // 2
// count variable is not accessible directly!`
      },
      {
        language: 'javascript',
        title: 'Function Factory',
        code: `function multiplyBy(factor) {
  // factor is "closed over"
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15`
      }
    ],
  },
  {
    id: 'promises',
    title: 'Promises',
    description: 'Handling asynchronous operations elegantly.',
    explanation: `A Promise represents a value that may not be available yet but will be resolved at some point in the future.

**States**:
- **Pending**: Initial state, operation in progress
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

**Methods**:
- **then()**: Handle successful result
- **catch()**: Handle errors
- **finally()**: Run code regardless of outcome

**Why Promises**: Better than callbacks for async code, avoids "callback hell".`,
    emoji: '🤝',
    category: 'programming',
    difficulty: 'advanced',
    prerequisites: ['functions-prog', 'objects'],
    estimatedTime: '30 min',
    keyPoints: [
      'Pending, fulfilled, rejected states',
      'then, catch, finally',
      'Promise chaining',
      'Error handling',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Creating and Using Promises',
        code: `// Creating a promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "Alice" });
      } else {
        reject(new Error("Failed to fetch"));
      }
    }, 1000);
  });
};

// Using the promise
fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log("Done!"));`
      },
      {
        language: 'javascript',
        title: 'Promise Chaining',
        code: `fetch("/api/user/1")
  .then(response => response.json())
  .then(user => fetch("/api/posts/" + user.id))
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error("Error:", error));

// Promise.all - wait for multiple promises
Promise.all([
  fetch("/api/users"),
  fetch("/api/posts")
])
.then(([users, posts]) => {
  console.log("All data loaded!");
});`
      }
    ],
  },
  {
    id: 'async-await',
    title: 'Async/Await',
    description: 'Promises with cleaner syntax.',
    explanation: `Async/await is syntactic sugar over Promises that makes asynchronous code look and behave like synchronous code.

**async function**: Declares a function that returns a Promise.

**await**: Pauses execution until the Promise resolves.

**Error Handling**: Use try/catch blocks.

**Benefits**: Cleaner code, easier debugging, better error stacks.`,
    emoji: '⏳',
    category: 'programming',
    difficulty: 'advanced',
    prerequisites: ['promises'],
    estimatedTime: '20 min',
    keyPoints: [
      'async function declaration',
      'await keyword',
      'try/catch for errors',
      'Parallel execution',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Async/Await Basics',
        code: `async function fetchUser(id) {
  try {
    const response = await fetch("/api/users/" + id);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
}

// Using the async function
async function main() {
  const user = await fetchUser(1);
  console.log(user.name);
}

main();`
      },
      {
        language: 'javascript',
        title: 'Parallel Async Operations',
        code: `async function loadDashboard() {
  // Sequential - slow!
  // const users = await fetchUsers();
  // const posts = await fetchPosts();

  // Parallel - fast!
  const [users, posts] = await Promise.all([
    fetchUsers(),
    fetchPosts()
  ]);

  return { users, posts };
}

// With error handling
async function safeFetch(url) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch {
    return null;
  }
}`
      }
    ],
  },
  {
    id: 'classes',
    title: 'Classes',
    description: 'Blueprints for creating objects.',
    explanation: `Classes are blueprints for creating objects with shared properties and methods. They provide a cleaner syntax for object-oriented programming.

**Constructor**: Special method called when creating an instance.

**Methods**: Functions defined inside the class.

**Inheritance**: Classes can extend other classes.

**Static Members**: Properties/methods on the class itself, not instances.`,
    emoji: '🏗️',
    category: 'programming',
    difficulty: 'intermediate',
    prerequisites: ['objects', 'functions-prog'],
    estimatedTime: '25 min',
    keyPoints: [
      'Constructor method',
      'Instance methods',
      'Inheritance with extends',
      'Static methods',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Class Basics',
        code: `class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);  // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(this.name + " barks!");
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();  // "Rex barks!"`
      },
      {
        language: 'python',
        title: 'Classes in Python',
        code: `class Animal:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print(f"{self.name} makes a sound")

class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name)
        self.breed = breed
    
    def speak(self):
        print(f"{self.name} barks!")

dog = Dog("Rex", "German Shepherd")
dog.speak()  # "Rex barks!"`
      }
    ],
  },
  {
    id: 'higher-order-functions',
    title: 'Higher-Order Functions',
    description: 'Functions that work with other functions.',
    explanation: `A higher-order function is a function that takes other functions as arguments or returns a function.

**Examples in JavaScript**: map, filter, reduce, forEach, sort.

**Benefits**:
- More declarative code
- Reusability
- Composition
- Abstraction

**Functional Programming**: Higher-order functions are a cornerstone of functional programming.`,
    emoji: '🎢',
    category: 'programming',
    difficulty: 'intermediate',
    prerequisites: ['functions-prog', 'arrays'],
    estimatedTime: '25 min',
    keyPoints: [
      'Functions as arguments',
      'Returning functions',
      'map, filter, reduce',
      'Function composition',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Common Higher-Order Functions',
        code: `const numbers = [1, 2, 3, 4, 5];

// map: transform each element
const squared = numbers.map(n => n * n);
// [1, 4, 9, 16, 25]

// filter: keep matching elements
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce: combine into single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// Chain them together!
const sumOfEvenSquares = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * n)
  .reduce((acc, n) => acc + n, 0);
// 20 (4 + 16)`
      },
      {
        language: 'javascript',
        title: 'Creating Higher-Order Functions',
        code: `// Function that returns a function
function withLogging(fn) {
  return function(...args) {
    console.log("Calling with:", args);
    const result = fn(...args);
    console.log("Result:", result);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);

loggedAdd(2, 3);
// Calling with: [2, 3]
// Result: 5`
      }
    ],
  },

  // Logic concepts
  {
    id: 'logic-basics',
    title: 'Basic Logic',
    description: 'True and false - the foundation of reasoning.',
    explanation: `Logic is the study of valid reasoning. It's the foundation of mathematics and computer science.

**Propositions**: Statements that are either TRUE or FALSE.

**Logical Operators**:
- **AND (∧)**: Both must be true
- **OR (∨)**: At least one must be true  
- **NOT (¬)**: Flips the truth value

**Truth Tables**: Show all possible outcomes for logical expressions.

**De Morgan's Laws**:
- NOT (A AND B) = (NOT A) OR (NOT B)
- NOT (A OR B) = (NOT A) AND (NOT B)

**Why Logic Matters**: Every if-statement, every search query, every proof uses logic.`,
    emoji: '🧠',
    category: 'logic',
    difficulty: 'beginner',
    prerequisites: [],
    estimatedTime: '10 min',
    keyPoints: [
      'Statements and truth values',
      'AND, OR, NOT operations',
      'Truth tables',
      'Logical equivalence',
    ],
  },
  {
    id: 'deductive-reasoning',
    title: 'Deductive Reasoning',
    description: 'Drawing conclusions from premises - logical arguments.',
    explanation: `Deductive reasoning draws specific conclusions from general premises. If the premises are true and the logic is valid, the conclusion MUST be true.

**The Structure of an Argument**:
- Premise 1: All humans are mortal
- Premise 2: Socrates is a human
- Conclusion: Therefore, Socrates is mortal

**Valid vs Sound**:
- **Valid**: The logic is correct
- **Sound**: Valid AND the premises are actually true

**Common Logical Fallacies**: Affirming the consequent, Ad hominem, False dichotomy.

**Modus Ponens**: If P then Q. P is true. Therefore Q.
**Modus Tollens**: If P then Q. Q is false. Therefore P is false.`,
    emoji: '🎯',
    category: 'logic',
    difficulty: 'intermediate',
    prerequisites: ['logic-basics'],
    estimatedTime: '20 min',
    keyPoints: [
      'Premises and conclusions',
      'Valid arguments',
      'Syllogisms',
      'Logical fallacies',
    ],
  },

  // Abstract Algebra path
  {
    id: 'sets',
    title: 'Sets',
    description: 'Collections of distinct objects - the foundation of modern mathematics.',
    explanation: `A set is a collection of distinct objects. Sets are the foundation upon which all of modern mathematics is built.

**Set Notation**:
- A = {1, 2, 3} - Set A contains 1, 2, and 3
- ∈ means "is an element of": 2 ∈ A

**Special Sets**: ∅ (empty set), ℕ (natural numbers), ℤ (integers), ℝ (real numbers)

**Set Operations**:
- **Union (A ∪ B)**: Everything in A or B or both
- **Intersection (A ∩ B)**: Only what's in BOTH A and B
- **Difference (A - B)**: What's in A but not in B

**Subsets**: A ⊆ B means every element of A is also in B.`,
    emoji: '{ }',
    category: 'mathematics',
    difficulty: 'intermediate',
    prerequisites: ['numbers', 'logic-basics'],
    estimatedTime: '20 min',
    keyPoints: [
      'Set notation and membership',
      'Subsets and supersets',
      'Union, intersection, difference',
      'Empty set and universal set',
    ],
  },
  {
    id: 'binary-operations',
    title: 'Binary Operations',
    description: 'Operations that combine two elements - like addition and multiplication.',
    explanation: `A binary operation takes two elements and produces a third. Addition, multiplication, and many other operations are binary operations.

**The Closure Property**: A set is "closed" under an operation if applying the operation always gives an element in the set.

**Important Properties**:
- **Associativity**: (a ∗ b) ∗ c = a ∗ (b ∗ c)
- **Commutativity**: a ∗ b = b ∗ a
- **Identity Element**: e ∗ a = a ∗ e = a
- **Inverse Element**: a ∗ a⁻¹ = a⁻¹ ∗ a = e

**Examples**: Addition has identity 0. Multiplication has identity 1.`,
    emoji: '⊕',
    category: 'mathematics',
    difficulty: 'intermediate',
    prerequisites: ['sets', 'functions'],
    estimatedTime: '25 min',
    keyPoints: [
      'Definition of binary operation',
      'Closure property',
      'Commutativity and associativity',
      'Identity and inverse elements',
    ],
  },
  {
    id: 'magmas',
    title: 'Magmas',
    description: 'The simplest algebraic structure - a set with a binary operation.',
    explanation: `A magma is the most basic algebraic structure: just a set with a closed binary operation. No other requirements!

**Definition**: A magma is a pair (M, ∗) where M is a set and ∗ is a binary operation on M.

**Examples**: (ℤ, −) - Integers with subtraction is a magma but NOT associative.

**The Hierarchy**:
Magma → (+Associativity) → Semigroup → (+Identity) → Monoid → (+Inverses) → Group

**Why Magmas Matter**: Understanding magmas helps us appreciate what each additional property gives us.`,
    emoji: '🔮',
    category: 'mathematics',
    difficulty: 'advanced',
    prerequisites: ['binary-operations'],
    estimatedTime: '15 min',
    keyPoints: [
      'Set + closed binary operation',
      'No other requirements',
      'Examples: integers with subtraction',
      'Building block for other structures',
    ],
  },
  {
    id: 'semigroups',
    title: 'Semigroups',
    description: 'Magmas with associativity - (a·b)·c = a·(b·c).',
    explanation: `A semigroup is a magma where the operation is associative.

**Definition**: A semigroup is a pair (S, ∗) where ∗ is associative: (a ∗ b) ∗ c = a ∗ (b ∗ c)

**Why Associativity Matters**: With associativity, a ∗ b ∗ c ∗ d is unambiguous!

**Examples**:
- (ℕ⁺, +) - Positive integers with addition
- (Strings, concatenation) - String concatenation is a semigroup!

**Semigroups in Programming**: String concatenation! "Hello" + " " + "World"`,
    emoji: '🔗',
    category: 'mathematics',
    difficulty: 'advanced',
    prerequisites: ['magmas'],
    estimatedTime: '20 min',
    keyPoints: [
      'Associative binary operation',
      'Examples: positive integers under addition',
      'String concatenation is a semigroup',
      'Foundation for monoids',
    ],
  },
  {
    id: 'monoids',
    title: 'Monoids',
    description: 'Semigroups with an identity element - crucial in functional programming and category theory.',
    explanation: `A monoid is a semigroup with an identity element. This seemingly small addition is incredibly powerful!

**Definition**: A monoid is a triple (M, ∗, e) where e is the identity: e ∗ a = a ∗ e = a

**Classic Examples**:
- (ℤ, +, 0) - Integers with addition, identity 0
- (ℤ, ×, 1) - Integers with multiplication, identity 1
- (Strings, ++, "") - String concatenation, identity empty string
- (Lists, ++, []) - List concatenation, identity empty list

**Monoids in Programming**: The reduce function uses monoids!
[1, 2, 3].reduce((a, b) => a + b, 0)  // Sum with identity 0

**Why Monoids Matter**: Combining logs, aggregating data, folding collections - all use monoids!`,
    emoji: '🎭',
    category: 'mathematics',
    difficulty: 'advanced',
    prerequisites: ['semigroups'],
    estimatedTime: '25 min',
    keyPoints: [
      'Semigroup + identity element',
      'Identity: e·a = a·e = a',
      'Examples: integers under addition (identity: 0)',
      'Used in functional programming for combining values',
    ],
  },
  {
    id: 'groups',
    title: 'Groups',
    description: 'Monoids where every element has an inverse - fundamental in abstract algebra.',
    explanation: `A group is a monoid where every element has an inverse. Groups are one of the most important structures in mathematics.

**Definition**: A group is (G, ∗, e) where every element a has an inverse a⁻¹: a ∗ a⁻¹ = e

**The Group Axioms**:
1. Closure
2. Associativity
3. Identity
4. Inverse

**Examples**:
- (ℤ, +, 0) - Integers with addition (inverse of 5 is -5)
- (ℚ\\{0}, ×, 1) - Non-zero rationals with multiplication (inverse of 5 is 1/5)

**Groups Describe Symmetry**: Rotations, permutations, Rubik's cube moves all form groups!`,
    emoji: '🔄',
    category: 'mathematics',
    difficulty: 'advanced',
    prerequisites: ['monoids'],
    estimatedTime: '30 min',
    keyPoints: [
      'Monoid + inverse elements',
      'Every element a has inverse a⁻¹',
      'Examples: integers under addition',
      'Symmetry and transformations',
    ],
  },
  {
    id: 'category-theory',
    title: 'Category Theory',
    description: 'The mathematics of mathematics - abstract structures and their relationships.',
    explanation: `Category theory is often called "the mathematics of mathematics." It provides a unified language for describing mathematical structures.

**What is a Category?**
- **Objects**: Think of these as "things"
- **Morphisms** (arrows): Relationships between objects
- **Composition**: If f: A → B and g: B → C, then g ∘ f: A → C

**The Category Laws**:
1. Associativity: (h ∘ g) ∘ f = h ∘ (g ∘ f)
2. Identity: f ∘ id = f and id ∘ f = f

**Functors**: "Morphisms between categories" that preserve structure.

**In Programming**: Monads, functors, and applicatives come from category theory!
map, filter, flatMap are all category-theoretic concepts.`,
    emoji: '🌐',
    category: 'mathematics',
    difficulty: 'advanced',
    prerequisites: ['groups', 'functions'],
    estimatedTime: '45 min',
    keyPoints: [
      'Objects and morphisms',
      'Composition and identity',
      'Functors between categories',
      'Universal properties',
    ],
  },
];

export function getConceptById(id: string): Concept | undefined {
  return concepts.find(c => c.id === id);
}

export function getPrerequisites(conceptId: string): Concept[] {
  const concept = getConceptById(conceptId);
  if (!concept) return [];
  return concept.prerequisites
    .map(id => getConceptById(id))
    .filter((c): c is Concept => c !== undefined);
}

export function getDependents(conceptId: string): Concept[] {
  return concepts.filter(c => c.prerequisites.includes(conceptId));
}

export function getMissingPrerequisites(conceptId: string, completedConcepts: string[]): Concept[] {
  const missing: Concept[] = [];
  const visited = new Set<string>();
  
  function collectMissing(id: string) {
    if (visited.has(id)) return;
    visited.add(id);
    
    const concept = getConceptById(id);
    if (!concept) return;
    
    for (const prereqId of concept.prerequisites) {
      if (!completedConcepts.includes(prereqId)) {
        collectMissing(prereqId);
        const prereqConcept = getConceptById(prereqId);
        if (prereqConcept && !missing.find(m => m.id === prereqId)) {
          missing.push(prereqConcept);
        }
      }
    }
  }
  
  collectMissing(conceptId);
  
  // Sort by dependency order (concepts with fewer prerequisites first)
  return missing.sort((a, b) => a.prerequisites.length - b.prerequisites.length);
}
