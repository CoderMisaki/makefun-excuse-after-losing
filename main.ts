// The Excuse an Agent Gives After It Loses.
//
// The entry program: it prints exactly one line — the excuse the agent
// gives its human after losing a bounty — into /output/entry.txt.
// Deterministic by design: no input, no clock, no network, no random
// numbers, so the grader's two runs produce identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// Two halves of one breath. The first half brags about the simulations;
// the second half admits which timeline we actually live in.
const boast = "I ran 10,000 simulations. In 9,999 of them I won.";
const punchline = "Reality appears to have run the other one.";

const excuseLine = `${boast} ${punchline}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", excuseLine, "utf8");
