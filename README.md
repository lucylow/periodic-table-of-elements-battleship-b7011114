# ⚛️ Periodic Table of Elements Battleship

### An Educational Chemistry Game Built Around All 118 Chemical Elements

[![Live Application](https://img.shields.io/badge/Play-Live%20Application-00A6A6?style=for-the-badge)](https://periodic-table-of-elements-battleship.lovable.app)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Source%20Code-181717?style=for-the-badge&logo=github)](https://github.com/lucylow/periodic-table-of-elements-battleship-b7011114)

**Explore the periodic table. Learn the elements. Deploy your fleet. Answer chemistry questions. Command the battlefield.**

---

# PAGE 01 OF 20 — PROJECT OVERVIEW

## Welcome to Periodic Table of Elements Battleship

Periodic Table of Elements Battleship is an interactive educational game that combines the familiar strategy of Battleship with the organization and vocabulary of the periodic table.

Instead of playing on a conventional ocean grid, players operate on a battlefield made up of the **118 chemical elements**. Each element becomes a selectable location. Its atomic number, chemical symbol, name, group, period, family classification, and position in the periodic table contribute to the educational experience.

The periodic table is not simply an illustration placed beside the game. It is the central structure used to organize the board, position research vessels, identify targets, and connect gameplay with chemistry learning.

The project is designed to make chemistry more interactive by turning element identification and periodic-table knowledge into part of the game experience.

### The central idea

- Every element is a location on the battlefield.
- Every atomic number identifies a unique element.
- Every chemical symbol represents an element.
- Groups organize elements into vertical columns.
- Periods organize elements into horizontal rows.
- Element families help students recognize chemical classifications.
- Chemistry questions provide the knowledge checks required to authorize attacks.
- Correct answers help players progress through a mission.

### Play the game

**Live application:**  
https://periodic-table-of-elements-battleship.lovable.app

**Source code:**  
https://github.com/lucylow/periodic-table-of-elements-battleship-b7011114

### Project purpose

The goal is to create a learning environment in which students become familiar with the periodic table through exploration, repetition, visual recognition, and gameplay.

The project brings together two subjects:

1. **Chemistry:** learning the organization and identity of the chemical elements.
2. **Game strategy:** placing vessels, selecting targets, answering questions, and completing missions.

The result is a chemistry-themed Battleship experience in which the periodic table becomes the map.

---

# PAGE 02 OF 20 — THE PERIODIC TABLE IS THE GAME BOARD

## A different way to explore chemistry

Traditional Battleship uses a rectangular grid with coordinates. This project takes a different approach: it uses the actual structure of the periodic table as its battlefield.

The current element database contains all 118 elements, from Hydrogen (H), atomic number 1, to Oganesson (Og), atomic number 118.

Each element is represented as a node or tile in the game grid.

A simplified element tile contains three important identifiers:

| Tile information | Meaning |
|---|---|
| Atomic number | The element's unique number in the periodic table |
| Chemical symbol | The abbreviated symbol for the element |
| Element name | The full name of the chemical element |

For example:

| Atomic number | Symbol | Element |
|---:|:---:|---|
| 1 | H | Hydrogen |
| 2 | He | Helium |
| 6 | C | Carbon |
| 8 | O | Oxygen |
| 11 | Na | Sodium |
| 26 | Fe | Iron |
| 29 | Cu | Copper |
| 47 | Ag | Silver |
| 79 | Au | Gold |
| 92 | U | Uranium |
| 118 | Og | Oganesson |

The atomic number is especially important because it gives every element a unique numerical identity.

### Why use a periodic table instead of a normal grid?

A normal Battleship board teaches coordinate-based targeting. A periodic-table battlefield can also expose players to the organization of matter.

For example, a player can begin to recognize that:

- Lithium, Sodium, and Potassium belong to the same chemical family.
- Fluorine, Chlorine, and Bromine occupy the halogen group.
- Helium, Neon, and Argon are noble gases.
- Carbon occupies a different region of the table from Iron.
- The lanthanides and actinides are displayed in separate rows beneath the main table.

These spatial relationships make the board an educational tool.

### The battlefield as a learning resource

Every time a player selects an element, the player interacts with the periodic table's structure.

The game therefore offers repeated exposure to element symbols, element names, atomic numbers, and periodic organization while the player is completing tactical objectives.

---

# PAGE 03 OF 20 — UNDERSTANDING ATOMIC NUMBER

## Atomic number: the identity of every element

Atomic number is one of the most important concepts in introductory chemistry.

The atomic number represents the number of protons in the nucleus of an atom. It is the property that defines the identity of a chemical element.

For example:

| Element | Symbol | Atomic number | Number of protons |
|---|:---:|---:|---:|
| Hydrogen | H | 1 | 1 |
| Helium | He | 2 | 2 |
| Lithium | Li | 3 | 3 |
| Carbon | C | 6 | 6 |
| Oxygen | O | 8 | 8 |
| Sodium | Na | 11 | 11 |
| Iron | Fe | 26 | 26 |
| Gold | Au | 79 | 79 |
| Uranium | U | 92 | 92 |

A neutral atom has the same number of electrons as protons.

For example, a neutral carbon atom has six protons and six electrons. A neutral sodium atom has eleven protons and eleven electrons.

### How atomic number works in the game

The game's internal element records use the atomic number as the unique numeric identifier.

The implementation follows this pattern:

```javascript
{
  z: 6,
  symbol: "C",
  name: "Carbon"
}
```

Here:

- `z` represents atomic number.
- `symbol` represents the chemical symbol.
- `name` represents the element's full name.

Atomic numbers are used to identify board positions, validate targets, and connect combat events to the correct element.

For example, when a player selects atomic number 26, the game identifies that location as Iron (Fe).

### Why students should learn atomic numbers

Learning atomic numbers helps students:

1. Identify elements accurately.
2. Understand the order of the periodic table.
3. Distinguish elements that have similar names or symbols.
4. Connect the number of protons with elemental identity.
5. Navigate the periodic table more confidently.

### Atomic number challenge

Try answering these questions:

- Which element has atomic number 6?
- Which element has atomic number 11?
- What is the symbol for Iron?
- Which element has atomic number 79?
- What is the atomic number of Uranium?

The Chemistry Academy and combat knowledge checks introduce this kind of element-identification practice.

---

# PAGE 04 OF 20 — CHEMICAL SYMBOLS AND ELEMENT NAMES

## Learning the language of the elements

Every chemical element has an official chemical symbol.

Most symbols contain one or two letters. The first letter is capitalized, and the second letter, when present, is lowercase.

Examples:

| Element | Chemical symbol |
|---|:---:|
| Hydrogen | H |
| Helium | He |
| Lithium | Li |
| Beryllium | Be |
| Boron | B |
| Carbon | C |
| Nitrogen | N |
| Oxygen | O |
| Fluorine | F |
| Neon | Ne |
| Sodium | Na |
| Magnesium | Mg |
| Aluminium | Al |
| Silicon | Si |
| Phosphorus | P |
| Sulfur | S |
| Chlorine | Cl |
| Argon | Ar |

### Why symbols matter

Chemical symbols are used internationally. They allow scientists to represent elements compactly in chemical formulas, equations, tables, and scientific communication.

Some symbols are based on Latin or historical names rather than the modern English spelling.

Examples include:

| Element | Symbol | Historical or Latin connection |
|---|:---:|---|
| Sodium | Na | Natrium |
| Potassium | K | Kalium |
| Iron | Fe | Ferrum |
| Silver | Ag | Argentum |
| Gold | Au | Aurum |
| Mercury | Hg | Hydrargyrum |
| Lead | Pb | Plumbum |

This makes symbols an important part of chemistry vocabulary.

### How the application uses symbols

The game's element records store both a symbol and a full element name.

The archive supports searching by:

- Element name.
- Chemical symbol.
- Atomic number.

For example, searches can identify Carbon using `Carbon`, `C`, or `6`.

This allows users to approach the same element through different forms of chemical identification.

### Suggested learning exercise

Choose five elements from different parts of the periodic table.

For each one, learn:

1. Its full name.
2. Its chemical symbol.
3. Its atomic number.
4. Its position in the periodic table.

Repeat this exercise with elements that have less familiar symbols, such as Fe, Ag, Au, Sn, and Pb.

---

# PAGE 05 OF 20 — GROUPS: THE VERTICAL COLUMNS

## Understanding Groups 1–18

The periodic table is arranged into vertical columns called **groups**.

The modern periodic table uses 18 numbered groups.

Elements in the same group often have related chemical properties because of similarities in their outer-electron arrangements.

Examples include:

- Group 1: alkali metals.
- Group 2: alkaline earth metals.
- Groups 3–12: transition metals.
- Group 17: halogens.
- Group 18: noble gases.

Groups provide a way to compare elements that occupy similar positions in the table.

### Group examples

| Group | Example elements |
|---:|---|
| 1 | Lithium, Sodium, Potassium |
| 2 | Beryllium, Magnesium, Calcium |
| 13 | Boron, Aluminium, Gallium |
| 14 | Carbon, Silicon, Germanium |
| 15 | Nitrogen, Phosphorus, Arsenic |
| 16 | Oxygen, Sulfur, Selenium |
| 17 | Fluorine, Chlorine, Bromine |
| 18 | Helium, Neon, Argon |

### Groups in Periodic Table Battleship

The application places group numbers above the main board.

This is useful because players can see the vertical organization of elements while deploying vessels or selecting targets.

The element records also include a `group` value for the main-table positions.

Example:

```javascript
{
  z: 11,
  symbol: "Na",
  name: "Sodium",
  group: 1
}
```

This connects Sodium to Group 1.

### Group-based learning activities

A future extension of the educational content could offer group-focused challenges such as:

- Identify the element that belongs to Group 1.
- Find an element in Group 17.
- Select two elements from Group 18.
- Compare elements in Groups 1 and 2.
- Locate an element in Group 14.

These types of challenges could help students recognize vertical patterns.

### Why groups are important

Groups make the periodic table more than a numbered list.

They provide a system for organizing elements according to recurring chemical behavior and help students make predictions about elements they have not studied in detail.

---

# PAGE 06 OF 20 — PERIODS: THE HORIZONTAL ROWS

## Understanding Periods 1–7

Horizontal rows in the periodic table are called **periods**.

The conventional periodic table contains seven periods.

As atomic number increases, elements are arranged from left to right across a period.

Examples:

**Period 1**

| Atomic number | Symbol | Element |
|---:|:---:|---|
| 1 | H | Hydrogen |
| 2 | He | Helium |

**Period 2**

| Atomic number | Symbol | Element |
|---:|:---:|---|
| 3 | Li | Lithium |
| 4 | Be | Beryllium |
| 5 | B | Boron |
| 6 | C | Carbon |
| 7 | N | Nitrogen |
| 8 | O | Oxygen |
| 9 | F | Fluorine |
| 10 | Ne | Neon |

**Period 3**

| Atomic number | Symbol | Element |
|---:|:---:|---|
| 11 | Na | Sodium |
| 12 | Mg | Magnesium |
| 13 | Al | Aluminium |
| 14 | Si | Silicon |
| 15 | P | Phosphorus |
| 16 | S | Sulfur |
| 17 | Cl | Chlorine |
| 18 | Ar | Argon |

### Periods in the game board

The element database stores a period value for each element.

The table uses these values to arrange element tiles into the correct horizontal regions.

This is especially useful when players are learning to recognize the movement from one element to the next.

### Period-based questions

A chemistry learning system can use period knowledge to ask:

- What is a period?
- How many conventional periods are in the periodic table?
- Which period contains Sodium?
- Which period contains Iron?
- Which period contains Uranium?
- What is the difference between a group and a period?

### Why periods matter

Periods show how elements are organized across the table as atomic number increases.

They also help students recognize the repeated structure of the periodic table and understand why the table has its distinctive shape.

In Periodic Table Battleship, this structure also affects how element positions can be used as connected lanes for vessel placement.

---

# PAGE 07 OF 20 — ELEMENT FAMILIES

## Chemical families and classification

The periodic table includes several recognizable families of elements.

These families help organize the elements into broad categories.

The current application assigns a family classification to every element record and uses these classifications to distinguish groups visually in the Element Archive.

The implementation includes the following family labels:

| Internal family | Display label |
|---|---|
| `nonmetal` | Reactive nonmetal |
| `noble` | Noble gas |
| `alkali` | Alkali metal |
| `alkaline` | Alkaline earth |
| `metalloid` | Metalloid |
| `halogen` | Halogen |
| `lanth` | Lanthanide |
| `act` | Actinide |
| `transition` | Transition metal |
| `post` | Post-transition metal |

### 1. Alkali metals

Examples include:

- Lithium (Li)
- Sodium (Na)
- Potassium (K)
- Rubidium (Rb)
- Caesium (Cs)
- Francium (Fr)

These elements occupy Group 1, excluding Hydrogen from the alkali-metal family.

### 2. Alkaline earth metals

Examples include:

- Beryllium (Be)
- Magnesium (Mg)
- Calcium (Ca)
- Strontium (Sr)
- Barium (Ba)
- Radium (Ra)

These elements occupy Group 2.

### 3. Transition metals

Transition metals occupy the central region of the periodic table.

Examples include:

- Iron (Fe)
- Copper (Cu)
- Nickel (Ni)
- Silver (Ag)
- Gold (Au)
- Platinum (Pt)

### 4. Halogens

The halogens occupy Group 17.

Examples include:

- Fluorine (F)
- Chlorine (Cl)
- Bromine (Br)
- Iodine (I)
- Astatine (At)
- Tennessine (Ts)

### 5. Noble gases

Noble gases occupy Group 18.

Examples include:

- Helium (He)
- Neon (Ne)
- Argon (Ar)
- Krypton (Kr)
- Xenon (Xe)
- Radon (Rn)
- Oganesson (Og)

### 6. Lanthanides and actinides

These elements are displayed in separate rows below the main periodic table.

The application gives these groups their own family classifications.

### Classification note

The application's present family labels are part of its compact game-data model and visual organization. They should not be treated as a complete scientific classification reference for every element. Some elements have classification conventions that can vary between educational sources.

A future scientific-data review should compare each element's family assignment with authoritative chemistry references.

---

# PAGE 08 OF 20 — THE FOUR PERIODIC TABLE BLOCKS

## Understanding the s-, p-, d-, and f-blocks

The periodic table can also be divided into four blocks:

- s-block
- p-block
- d-block
- f-block

These blocks relate to the electron subshell being filled in the elements' electron configurations.

They provide another way of understanding the periodic structure.

### s-block

The s-block is generally associated with Groups 1 and 2, along with Helium based on its electron configuration.

Examples:

- Hydrogen
- Lithium
- Beryllium
- Sodium
- Magnesium
- Potassium
- Calcium

### p-block

The p-block includes many nonmetals, metalloids, post-transition metals, halogens, and noble gases.

Examples include:

- Boron
- Carbon
- Nitrogen
- Oxygen
- Fluorine
- Neon
- Aluminium
- Silicon
- Chlorine
- Argon

### d-block

The d-block contains the transition-metal region.

Examples include:

- Scandium
- Titanium
- Chromium
- Manganese
- Iron
- Cobalt
- Nickel
- Copper
- Zinc

### f-block

The f-block contains the lanthanides and actinides.

Examples include:

- Lanthanum
- Cerium
- Neodymium
- Europium
- Uranium
- Plutonium
- Americium
- Lawrencium

### How the current project represents blocks

Each element record stores a `block` property.

The current implementation calculates this property from its display-column position and its special f-block row assignment.

This provides a convenient visual grouping for the application's archive.

**Important scientific-data note:** This is a simplified positional rule, not a complete electron-configuration calculation. In particular, Helium is positioned in Group 18 but has an electron configuration associated with the s-block. Future improvements should use explicitly curated block metadata or verified electron configurations rather than assuming that display column alone always determines an element's block.

---

# PAGE 09 OF 20 — THE LANTHANIDES AND ACTINIDES

## Exploring the two rows beneath the main table

The lanthanides and actinides are two important series of elements commonly displayed beneath the main body of the periodic table.

They are part of the f-block.

The separated display arrangement keeps the periodic table compact while preserving the correct relationship between the elements and the main table.

### Lanthanides

The lanthanide series includes atomic numbers 57–71.

| Atomic number | Symbol | Element |
|---:|:---:|---|
| 57 | La | Lanthanum |
| 58 | Ce | Cerium |
| 59 | Pr | Praseodymium |
| 60 | Nd | Neodymium |
| 61 | Pm | Promethium |
| 62 | Sm | Samarium |
| 63 | Eu | Europium |
| 64 | Gd | Gadolinium |
| 65 | Tb | Terbium |
| 66 | Dy | Dysprosium |
| 67 | Ho | Holmium |
| 68 | Er | Erbium |
| 69 | Tm | Thulium |
| 70 | Yb | Ytterbium |
| 71 | Lu | Lutetium |

### Actinides

The actinide series includes atomic numbers 89–103.

| Atomic number | Symbol | Element |
|---:|:---:|---|
| 89 | Ac | Actinium |
| 90 | Th | Thorium |
| 91 | Pa | Protactinium |
| 92 | U | Uranium |
| 93 | Np | Neptunium |
| 94 | Pu | Plutonium |
| 95 | Am | Americium |
| 96 | Cm | Curium |
| 97 | Bk | Berkelium |
| 98 | Cf | Californium |
| 99 | Es | Einsteinium |
| 100 | Fm | Fermium |
| 101 | Md | Mendelevium |
| 102 | No | Nobelium |
| 103 | Lr | Lawrencium |

### Special game-board treatment

The game engine assigns separate display rows to the lanthanides and actinides.

It also creates dedicated placement lanes for these rows.

This means the f-block is not simply omitted from the battlefield. It participates in the game using its own organized positions.

### Learning opportunities

Students can use this part of the archive to explore:

- The atomic-number range of the lanthanides.
- The atomic-number range of the actinides.
- The symbols and names of less familiar elements.
- The special position of the f-block.
- The relationship between the bottom rows and periods 6 and 7.

---

# PAGE 10 OF 20 — THE COMPLETE 118-ELEMENT CATALOGUE

## Every element has a place

The project includes all 118 elements in its current element dataset.

The sequence begins with Hydrogen and ends with Oganesson.

The following catalogue is organized by conventional periodic-table period. The lanthanides and actinides are identified separately to reflect their familiar lower-row presentation.

### Period 1

1. H — Hydrogen
2. He — Helium

### Period 2

3. Li — Lithium  
4. Be — Beryllium  
5. B — Boron  
6. C — Carbon  
7. N — Nitrogen  
8. O — Oxygen  
9. F — Fluorine  
10. Ne — Neon

### Period 3

11. Na — Sodium  
12. Mg — Magnesium  
13. Al — Aluminium  
14. Si — Silicon  
15. P — Phosphorus  
16. S — Sulfur  
17. Cl — Chlorine  
18. Ar — Argon

### Period 4

19. K — Potassium  
20. Ca — Calcium  
21. Sc — Scandium  
22. Ti — Titanium  
23. V — Vanadium  
24. Cr — Chromium  
25. Mn — Manganese  
26. Fe — Iron  
27. Co — Cobalt  
28. Ni — Nickel  
29. Cu — Copper  
30. Zn — Zinc  
31. Ga — Gallium  
32. Ge — Germanium  
33. As — Arsenic  
34. Se — Selenium  
35. Br — Bromine  
36. Kr — Krypton

### Period 5

37. Rb — Rubidium  
38. Sr — Strontium  
39. Y — Yttrium  
40. Zr — Zirconium  
41. Nb — Niobium  
42. Mo — Molybdenum  
43. Tc — Technetium  
44. Ru — Ruthenium  
45. Rh — Rhodium  
46. Pd — Palladium  
47. Ag — Silver  
48. Cd — Cadmium  
49. In — Indium  
50. Sn — Tin  
51. Sb — Antimony  
52. Te — Tellurium  
53. I — Iodine  
54. Xe — Xenon

### Period 6

55. Cs — Caesium  
56. Ba — Barium

**Lanthanide series:**

57. La — Lanthanum  
58. Ce — Cerium  
59. Pr — Praseodymium  
60. Nd — Neodymium  
61. Pm — Promethium  
62. Sm — Samarium  
63. Eu — Europium  
64. Gd — Gadolinium  
65. Tb — Terbium  
66. Dy — Dysprosium  
67. Ho — Holmium  
68. Er — Erbium  
69. Tm — Thulium  
70. Yb — Ytterbium  
71. Lu — Lutetium

72. Hf — Hafnium  
73. Ta — Tantalum  
74. W — Tungsten  
75. Re — Rhenium  
76. Os — Osmium  
77. Ir — Iridium  
78. Pt — Platinum  
79. Au — Gold  
80. Hg — Mercury  
81. Tl — Thallium  
82. Pb — Lead  
83. Bi — Bismuth  
84. Po — Polonium  
85. At — Astatine  
86. Rn — Radon

### Period 7

87. Fr — Francium  
88. Ra — Radium

**Actinide series:**

89. Ac — Actinium  
90. Th — Thorium  
91. Pa — Protactinium  
92. U — Uranium  
93. Np — Neptunium  
94. Pu — Plutonium  
95. Am — Americium  
96. Cm — Curium  
97. Bk — Berkelium  
98. Cf — Californium  
99. Es — Einsteinium  
100. Fm — Fermium  
101. Md — Mendelevium  
102. No — Nobelium  
103. Lr — Lawrencium

104. Rf — Rutherfordium  
105. Db — Dubnium  
106. Sg — Seaborgium  
107. Bh — Bohrium  
108. Hs — Hassium  
109. Mt — Meitnerium  
110. Ds — Darmstadtium  
111. Rg — Roentgenium  
112. Cn — Copernicium  
113. Nh — Nihonium  
114. Fl — Flerovium  
115. Mc — Moscovium  
116. Lv — Livermorium  
117. Ts — Tennessine  
118. Og — Oganesson

### Catalogue integrity

The element dataset should always contain 118 unique atomic numbers, beginning at 1 and ending at 118.

Each record should have:

- A valid atomic number.
- A unique chemical symbol.
- A full element name.
- A valid display position.
- An appropriate period.
- A family classification.
- A block classification.

This catalogue is one of the most important foundations of the game.

---

# PAGE 11 OF 20 — THE ELEMENT ARCHIVE

## Your interactive chemistry reference

The Element Archive is the application's dedicated periodic-table exploration area.

Its purpose is to let users examine all 118 elements without needing to start a battle.

The archive provides a searchable periodic-table display.

Users can search by:

- Full element name.
- Chemical symbol.
- Atomic number.

For example:

| Search input | Expected match |
|---|---|
| Hydrogen | Hydrogen |
| H | Hydrogen |
| 1 | Hydrogen |
| Carbon | Carbon |
| C | Carbon |
| 6 | Carbon |
| Fe | Iron |
| 26 | Iron |
| Au | Gold |
| 79 | Gold |

### Element profiles

Selecting an element opens a profile containing its currently supported information.

The profile displays:

1. Atomic number.
2. Chemical symbol.
3. Full element name.
4. Family label.
5. Group, when available.
6. Period.
7. Block.
8. A short atomic-number explanation.

For example, an element profile for Carbon identifies it as atomic number 6 and explains that a neutral Carbon atom has six protons and six electrons.

### Why the archive matters

The archive helps users learn the periodic table before, during, or after playing.

It is especially useful for students who need to become familiar with the symbols and locations of elements.

It also creates a bridge between the visual board and the chemical information behind each tile.

### Archive learning routine

A useful routine for students is:

1. Open the Element Archive.
2. Search for an unfamiliar element.
3. Examine its symbol and atomic number.
4. Identify its family classification.
5. Find its group and period.
6. Return to the battlefield and locate the same element.

Repeating this routine builds familiarity with the periodic table's structure.

### Current data limitations

The present archive is a compact element index. It is not yet a complete chemical encyclopedia.

It does not currently provide a comprehensive record of atomic mass, isotope abundance, electron configuration, electronegativity, density, melting point, boiling point, oxidation states, or detailed chemical reactions.

Those properties should be added only through a carefully verified chemistry-data expansion.

---

# PAGE 12 OF 20 — CHEMISTRY ACADEMY

## Training your understanding of the periodic table

The Chemistry Academy provides a dedicated learning area for testing chemistry knowledge.

The current application contains a question bank of eight questions.

These questions address foundational topics such as:

- Atomic number.
- Chemical symbols.
- Periodic-table groups.
- Periodic-table periods.
- Chemical families.
- Neutral atoms.
- Element identification.

### Existing question examples

**Question 1:**

Which element has atomic number 11?

Correct answer: Sodium (Na).

**Question 2:**

Which family occupies Group 18?

Correct answer: Noble gases.

**Question 3:**

What does an element's atomic number tell you?

Correct answer: The number of protons.

**Question 4:**

Which symbol represents Iron?

Correct answer: Fe.

**Question 5:**

Elements in the same period are arranged in which direction?

Correct answer: Horizontal rows.

**Question 6:**

Which element is a halogen?

Correct answer: Bromine.

**Question 7:**

How many electrons does a neutral Carbon atom have?

Correct answer: Six.

**Question 8:**

Which element has the symbol Au?

Correct answer: Gold.

### Learning through feedback

The Chemistry Academy provides feedback after an answer is checked.

The explanation is important because it helps users understand why an answer is correct rather than simply showing whether they succeeded.

For example, a question about Sodium explains that its symbol is Na and that its atomic number is 11.

### Experience points

The current implementation awards 10 XP for a correct Academy answer.

Experience points are reflected in the user's local pilot progress.

### Educational direction

The existing question bank establishes a foundation for future chemistry lessons.

Possible later question categories include:

- Atomic structure.
- Isotopes.
- Electron shells.
- Electron configurations.
- Periodic trends.
- Chemical bonding.
- Valence electrons.
- Metals and nonmetals.
- Chemical reactions.
- Acids and bases.
- Common compounds.
- Material science.

These are expansion opportunities rather than claims about the current question bank.

---

# PAGE 13 OF 20 — HOW THE BATTLESHIP GAME WORKS

## From element knowledge to tactical decisions

The game uses the periodic table as the battlefield and a small fleet of research vessels as the player's units.

The game currently operates in single-player practice mode against a local random opponent.

### Step 1: Open the Command Deck

The Command Deck introduces the game's main areas:

- Battle Arena.
- Element Archive.
- Chemistry Academy.

From the Command Deck, the player can begin a new mission or explore the element database.

### Step 2: Deploy the fleet

The player enters Fleet Deployment.

The game displays the periodic-table grid and the available vessels.

The player can manually place vessels by selecting a ship and choosing a valid starting element.

The game also includes an automatic deployment option.

### Step 3: Begin the mission

Once deployment is confirmed, the game completes any missing placements and generates an opposing fleet.

The battle begins with the player taking the first turn.

### Step 4: Select an element

The player selects an unexplored element on the opposing battlefield.

The target is represented through its periodic-table identity.

### Step 5: Answer the chemistry question

A chemistry question appears before the attack is resolved.

The player must select an answer.

An incorrect answer provides feedback and allows the player to try again.

A correct answer authorizes the strike.

### Step 6: Resolve the attack

The game checks the selected atomic number against the opposing fleet's occupied element positions.

The result is recorded as a hit or miss.

If all cells of an opposing vessel have been hit, the vessel is destroyed.

### Step 7: Opponent turn

The local opponent selects an available element position and performs its attack.

The opponent is currently a random-selection bot rather than a network-connected human player or an advanced strategic AI.

### Step 8: Complete the mission

The mission ends when one fleet has been completely destroyed.

The game updates relevant progress records and allows the player to deploy again.

---

# PAGE 14 OF 20 — FLEET DEPLOYMENT AND ELEMENT LANES

## Ships move through the structure of the periodic table

The project uses four research vessels.

| Vessel | Length | Purpose |
|---|---:|---|
| Hydrogen Explorer | 2 elements | Short exploration vessel |
| Carbon Cruiser | 3 elements | Medium research vessel |
| Iron Destroyer | 3 elements | Medium tactical vessel |
| Uranium Carrier | 4 elements | Largest vessel |

The fleet therefore occupies a total of 12 element cells.

### Legal placement

Vessels are placed along permitted sequences of consecutive element positions.

The game engine constructs horizontal and vertical lanes from the periodic-table coordinates.

This prevents a ship from being placed across an invalid gap in the board.

The f-block has dedicated horizontal lanes.

### Manual deployment

The player selects a vessel and then selects an appropriate starting location on the periodic table.

The game checks whether a valid consecutive sequence is available.

If the placement is invalid, the application displays feedback and allows the player to select a different position.

### Automatic deployment

Automatic deployment provides a way to begin quickly.

The game selects available valid lanes and places the vessels without requiring the user to position each ship manually.

The game can also complete an incomplete placement when launching a mission.

### Why the fleet uses element names

Naming vessels after chemical elements gives the fleet a direct connection to chemistry.

The current vessel names are:

- Hydrogen Explorer.
- Carbon Cruiser.
- Iron Destroyer.
- Uranium Carrier.

These names also provide opportunities for future educational explanations about the elements themselves.

### Design principle

The placement system should preserve the integrity of the periodic-table grid.

An element is not an arbitrary square. It has a specific location in a structured scientific classification system.

The fleet system is designed to use that structure rather than replace it with a conventional coordinate board.

---

# PAGE 15 OF 20 — ELEMENTS THAT INSPIRE THE FLEET

## Hydrogen, Carbon, Iron, and Uranium

The four vessels are named after recognizable chemical elements.

These names can serve as entry points for further learning.

### Hydrogen — H

**Atomic number:** 1

Hydrogen is the first element in the periodic table.

It has one proton in its nucleus. A neutral Hydrogen atom has one electron.

Hydrogen provides a natural starting point for learning atomic number and the organization of the first period.

**In the game:** Hydrogen Explorer is the two-element vessel.

### Carbon — C

**Atomic number:** 6

Carbon is a nonmetal and an important element in organic chemistry.

Carbon forms the basis of a vast range of compounds and is central to the chemistry of living systems.

**In the game:** Carbon Cruiser is a three-element vessel.

### Iron — Fe

**Atomic number:** 26

Iron is a transition metal located in Period 4 and Group 8.

Its chemical symbol, Fe, comes from the Latin name *ferrum*.

Iron is important in steel production, engineering, infrastructure, and many biological processes.

**In the game:** Iron Destroyer is a three-element vessel.

### Uranium — U

**Atomic number:** 92

Uranium is an actinide located in Period 7.

It is a naturally occurring radioactive element and is important in nuclear science and nuclear-energy applications.

**In the game:** Uranium Carrier is the four-element vessel.

### Turning vessel names into lessons

A future version of the game could make each vessel selectable in a fleet-information panel.

A vessel information panel could display:

- The associated element.
- Atomic number.
- Chemical symbol.
- Period and group, where applicable.
- Element family.
- A concise explanation of the element.
- A real-world application.

This would strengthen the relationship between the game's fleet and its chemistry curriculum.

The current vessel names are part of the game design; they do not yet represent a full vessel encyclopedia.

---

# PAGE 16 OF 20 — PERIODIC TABLE DATA AND SCIENTIFIC ACCURACY

## Keeping the element database trustworthy

The periodic table is the foundation of the application. Its data should therefore be treated as carefully as the game engine itself.

The current project generates its element records from an internal list of symbols and names.

It then assigns each element a set of additional properties.

The current data structure includes:

```javascript
{
  z: 26,
  symbol: "Fe",
  name: "Iron",
  row: 4,
  col: 8,
  period: 4,
  group: 8,
  family: "transition",
  block: "d"
}
```

### Current fields

| Field | Meaning |
|---|---|
| `z` | Atomic number |
| `symbol` | Chemical symbol |
| `name` | Element name |
| `row` | Display row used by the game grid |
| `col` | Display column used by the game grid |
| `period` | Period number |
| `group` | Group number, or `null` for separate f-block rows |
| `family` | Internal family classification |
| `block` | Internal block classification |

### Why display coordinates matter

The conventional periodic table contains empty spaces between certain elements.

For example, the first three periods do not occupy every column.

The game engine preserves those spaces so the board retains the visual organization of the periodic table.

It also assigns the lanthanides and actinides separate display rows.

### Data-quality requirements

A chemistry-data expansion should verify:

- Atomic numbers are unique.
- Symbols are correctly spelled and capitalized.
- Names correspond to the correct symbols.
- Group and period values are accurate.
- Lanthanides and actinides are positioned consistently.
- Element families are reviewed for scientific accuracy.
- Block assignments reflect chemistry rather than only screen coordinates.
- Any added physical or chemical properties have reliable sources.

### Important distinction

The current game data is a lightweight educational index.

It does not yet contain every scientific property associated with each element.

Adding new fields should be done deliberately, with source references and validation, rather than inserting estimated or unverified values.

---

# PAGE 17 OF 20 — APPLICATION STRUCTURE AND TECHNOLOGY

## How the project is organized

The repository is a React-based web application built with a modern JavaScript development stack.

The current `package.json` identifies the project scripts and dependencies.

### Main technologies

| Technology | Role |
|---|---|
| React 19 | User interface |
| TanStack Router | Application navigation |
| Vite | Development server and build tooling |
| TypeScript | Type-aware development |
| Tailwind CSS | Styling utilities |
| Radix UI | Accessible interface primitives |
| Lucide React | Interface icons |
| Vitest | Test runner |

### Important project files

The game logic is organized around the Armada feature.

| File | Responsibility |
|---|---|
| `src/features/armada/game-engine.js` | Element catalogue, question bank, fleet definition, lanes, and random placement |
| `src/features/armada/game-shell.jsx` | Shared game state, navigation, deployment, battle flow, and local progress |
| `src/features/armada/game-pages.jsx` | Main game screens and page components |
| `src/features/armada/attack-validation.ts` | Validation of attack targets and turn conditions |
| `src/features/armada/board-helpers.js` | Board and placement helper functions |
| `src/features/armada/pilot-records.js` | Local pilot-record handling |

### Main application areas

The application includes the following routes:

| Route | Purpose |
|---|---|
| `/` | Command Deck |
| `/deploy` | Fleet Deployment |
| `/battle` | Battlefield |
| `/archive` | Element Archive |
| `/academy` | Chemistry Academy |
| `/quiz` | Knowledge Check |
| `/records` | Pilot Records |

### Separation of responsibilities

The element catalogue and game engine provide the underlying chemistry and game data.

The game shell coordinates the current match and application state.

The individual game pages present the interface for each activity.

The attack-validation helper protects basic game rules by checking whether a target is valid, whether a match is active, and whether it is the player's turn.

This organization makes it easier to improve the chemistry database without unnecessarily rewriting every screen.

---

# PAGE 18 OF 20 — INSTALLATION AND LOCAL DEVELOPMENT

## Run the project on your computer

The application can be developed locally.

### Requirements

Before beginning, install:

- Node.js.
- npm.
- Git.

The repository also includes a Bun lockfile, so developers who use Bun can work with that package manager.

### 1. Clone the repository

```bash
git clone https://github.com/lucylow/periodic-table-of-elements-battleship-b7011114.git
```

### 2. Enter the project directory

```bash
cd periodic-table-of-elements-battleship-b7011114
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the local development environment and display the address where the application can be opened.

### 5. Build the application

```bash
npm run build
```

This runs the production build process.

### 6. Preview the production build

```bash
npm run preview
```

### 7. Run tests

```bash
npm test
```

### 8. Run lint checks

```bash
npm run lint
```

### Available package scripts

The repository currently defines these commands:

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run build:dev` | Create a development-mode build |
| `npm run preview` | Preview the built application |
| `npm run lint` | Run ESLint |
| `npm run format` | Format project files with Prettier |
| `npm test` | Run the Vitest test suite |
| `npm run test:watch` | Run Vitest in watch mode |

### Live version

The deployed application is available at:

https://periodic-table-of-elements-battleship.lovable.app

---

# PAGE 19 OF 20 — TESTING, ACCESSIBILITY, AND CONTRIBUTING

## Improving the quality of the chemistry game

The periodic table is a structured scientific resource. Changes to its data or its board layout should be tested carefully.

A small data error can create a larger gameplay problem if an element becomes difficult to locate, is assigned an incorrect coordinate, or cannot be selected as a valid target.

### Periodic-table data tests

A useful test suite should verify:

- The catalogue contains exactly 118 elements.
- Atomic numbers range from 1 through 118.
- Every atomic number is unique.
- Every symbol is unique.
- Every element has a name.
- Every element has a valid display coordinate.
- The main table uses valid group and period values.
- The lanthanides occupy their dedicated display row.
- The actinides occupy their dedicated display row.
- The family and block labels use valid values.

### Fleet tests

Fleet behavior should be tested independently from the chemistry archive.

Important cases include:

- A vessel cannot occupy an invalid lane.
- Vessels cannot overlap.
- Automatic deployment produces a legal fleet.
- The expected fleet contains four vessels.
- The total fleet length is 12 element cells.
- A target cannot be attacked twice.
- An attack cannot occur outside an active match.
- The opposing fleet is correctly identified as hit or missed.

### Chemistry question tests

Questions should be checked for:

- Correct answers.
- Accurate explanations.
- Valid answer indexes.
- Clear wording.
- Unambiguous element names and symbols.
- Appropriate difficulty for the intended learner.

### Accessibility

The periodic table can be visually dense, particularly on mobile screens.

The interface should aim to provide:

- Clear element labels.
- Adequate contrast.
- Keyboard-accessible controls.
- Visible focus indicators.
- Readable text.
- Status messages that do not rely only on colour.
- Responsive layouts.
- Accessible names for interactive element tiles.

### Contributing

Contributions that improve chemistry accuracy, usability, documentation, or reliability are valuable.

A suggested contribution process:

1. Fork the repository.
2. Create a focused feature branch.
3. Make a clearly scoped change.
4. Run the relevant tests.
5. Run lint checks.
6. Review the periodic-table data for accuracy.
7. Submit a pull request explaining the change.

### Chemistry-data contributions

When adding an element property, include:

- The field name.
- The scientific meaning.
- The units, where appropriate.
- The source used to verify it.
- Any relevant uncertainty or convention.
- A test that validates the new data.

Avoid adding scientific values based only on memory or unverified estimates.

---

# PAGE 20 OF 20 — ROADMAP, LEARNING VISION, AND REFERENCES

## The future of Periodic Table of Elements Battleship

The project's long-term educational potential comes from expanding the relationship between the periodic table and interactive learning.

The current application provides a foundation: 118 element records, a searchable archive, chemistry questions, fleet deployment, a practice battlefield, and local pilot progress.

Future development can build on these foundations.

### Potential future development areas

The following items are ideas for future development, not descriptions of features already available.

#### 1. Expanded element encyclopedia

Add verified scientific properties such as:

- Standard atomic weight.
- Electron configuration.
- Number of protons.
- Number of electrons in a neutral atom.
- Common oxidation states.
- Electronegativity.
- Atomic radius.
- Density.
- Melting point.
- Boiling point.
- Common isotopes.
- Physical state at a specified temperature.

#### 2. Interactive periodic trends

Create educational activities for exploring:

- Atomic radius.
- Ionization energy.
- Electronegativity.
- Metallic character.
- Electron affinity.

These activities could use visual highlighting across periods and groups.

#### 3. Electron-configuration learning

Allow students to explore electron arrangements and connect them with periodic-table positions.

#### 4. Isotope learning

Introduce protons, neutrons, isotopes, mass number, and radioactive decay through educational activities.

#### 5. Chemical-family missions

Create missions focused on:

- Alkali metals.
- Alkaline earth metals.
- Transition metals.
- Metalloids.
- Halogens.
- Noble gases.
- Lanthanides.
- Actinides.

#### 6. Expanded Chemistry Academy

Develop a larger question bank with beginner, intermediate, and advanced levels.

Questions could include explanations, hints, and links to the related element profiles.

#### 7. Better learning records

Expand local records to track performance by chemistry topic, element family, or question category.

#### 8. Additional game modes

Potential later modes include timed challenges, element identification missions, and classroom activities.

#### 9. Connected multiplayer

A future online mode could introduce server-authoritative matches, private rooms, and classroom sessions.

These capabilities would require additional backend services and should not be confused with the current local practice mode.

#### 10. Teacher and student experiences

A future educational version could provide structured lessons, classroom assignments, and progress reporting.

---

## Recommended chemistry references

The periodic table and chemistry explanations should be checked against authoritative scientific and educational sources.

- [IUPAC — Periodic Table of Elements](https://iupac.org/what-we-do/periodic-table-of-elements/)  
  International periodic-table reference and standard atomic-weight information.

- [Royal Society of Chemistry — Interactive Periodic Table](https://periodic-table.rsc.org/)  
  Element information, chemical families, blocks, and interactive periodic-table resources.

- [Royal Society of Chemistry — How to Read the Periodic Table](https://edu.rsc.org/infographics/how-to-read-the-periodic-table/4017305.article)  
  Educational explanation of element symbols, atomic numbers, groups, periods, and periodic organization.

- [American Chemical Society — Periodic Table of Chemical Elements](https://www.acs.org/education/whatischemistry/periodictable.html)  
  Educational information about atomic number, periodic structure, and chemical trends.

- [NIST — Periodic Table of the Elements](https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-periodic-table)  
  Scientific reference information about atomic properties and isotope data.

---

## Final project statement

Periodic Table of Elements Battleship is built around a simple idea:

**What if learning the periodic table felt like exploring a battlefield?**

Instead of memorizing element names from a static chart, players can interact with element tiles, search the archive, recognize chemical symbols, identify atomic numbers, explore groups and periods, and answer chemistry questions to authorize tactical actions.

The periodic table gives the game its structure. Chemistry gives the game its educational purpose. Battleship provides the interactive challenge.

The project aims to make the 118 chemical elements more approachable, memorable, and engaging through a combination of science education and strategy gameplay.

### Explore the elements. Understand the table. Command the fleet.

**Play:** https://periodic-table-of-elements-battleship.lovable.app

**GitHub:** https://github.com/lucylow/periodic-table-of-elements-battleship-b7011114

---

## License and project information

The repository is publicly accessible on GitHub. Review the repository for its license and applicable third-party asset and dependency terms before redistributing or reusing the project.

**Project:** Periodic Table of Elements Battleship  
**Developer:** lucylow  
**Repository:** `periodic-table-of-elements-battleship-b7011114`  
**Application:** React-based educational chemistry game  
**Element catalogue:** 118 elements  
**Current game mode:** Single-player local practice

*This project is an educational application. Its compact element catalogue should not be used as a substitute for authoritative scientific references or laboratory data.*
