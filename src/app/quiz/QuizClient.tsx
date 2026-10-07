'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { plants, Plant } from '../../data/plants';
import styles from './Quiz.module.css';

type Answers = {
  placement?: string;
  light?: string;
  care?: string;
  pets?: string;
};

const questions = [
  {
    id: 'placement',
    question: 'Where will your new plant live?',
    options: [
      { label: 'Indoors (Living room, bedroom, office)', value: 'indoor' },
      { label: 'Outdoors (Balcony, garden, patio)', value: 'outdoor' },
    ],
  },
  {
    id: 'light',
    question: 'How much sunlight does that spot get?',
    options: [
      { label: 'Low Light (Dim corner, north-facing window)', value: 'low' },
      { label: 'Bright, Indirect Light (Near a sunny window)', value: 'bright' },
      { label: 'Direct Sun (Full sun most of the day)', value: 'direct' },
    ],
  },
  {
    id: 'care',
    question: 'What is your plant care style?',
    options: [
      { label: 'Set it and forget it (I often forget to water)', value: 'low-maintenance' },
      { label: 'I love tending to my plants (I enjoy regular watering)', value: 'moderate' },
    ],
  },
  {
    id: 'pets',
    question: 'Do you have furry friends at home?',
    options: [
      { label: 'Yes, and they chew on everything! (Need Pet Safe)', value: 'safe' },
      { label: 'No pets / They ignore plants', value: 'unsafe' },
    ],
  },
];

export default function QuizClient() {
  const [step, setStep] = useState(-1); // -1 is welcome screen, 0-3 are questions, 4 is results
  const [answers, setAnswers] = useState<Answers>({});
  const [matches, setMatches] = useState<Plant[]>([]);

  const handleStart = () => {
    setStep(0);
  };

  const handleAnswer = (questionId: keyof Answers, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateMatches(newAnswers);
      setStep(questions.length);
    }
  };

  const calculateMatches = (finalAnswers: Answers) => {
    // Scoring system: each plant gets points based on how well it matches
    const scoredPlants = plants.map((plant) => {
      let score = 0;

      // Placement match
      const isOutdoorPlant = plant.categories.includes('Outdoor');
      if (finalAnswers.placement === 'outdoor' && isOutdoorPlant) score += 3;
      if (finalAnswers.placement === 'indoor' && !isOutdoorPlant) score += 3;

      // Light match
      if (finalAnswers.light === 'low' && plant.categories.includes('Low Light')) score += 3;
      if (finalAnswers.light === 'bright' && (plant.categories.includes('Bright Light') || plant.categories.includes('Foliage'))) score += 2;
      if (finalAnswers.light === 'direct' && plant.categories.includes('Full Sun')) score += 3;

      // Care match
      const isEasy = plant.care.difficulty === 'Easy' || plant.categories.includes('Low Maintenance');
      if (finalAnswers.care === 'low-maintenance' && isEasy) score += 3;
      if (finalAnswers.care === 'moderate' && !isEasy) score += 1; // Moderate caretakers can handle anything, but slight preference

      // Pet safe match - this is a hard filter
      if (finalAnswers.pets === 'safe' && !plant.care.petSafe) {
        score = -100; // Disqualify if pet safe is required but plant is toxic
      } else if (finalAnswers.pets === 'safe' && plant.care.petSafe) {
        score += 5; // Heavy weight for pet safe if requested
      }

      return { plant, score };
    });

    // Sort by highest score, filter out disqualified, take top 3
    const topMatches = scoredPlants
      .filter((p) => p.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((p) => p.plant);

    // If no perfect matches due to strict filtering, fallback to some safe plants
    if (topMatches.length === 0) {
       const fallbacks = plants.filter(p => finalAnswers.pets === 'safe' ? p.care.petSafe : true).slice(0, 3);
       setMatches(fallbacks);
    } else {
       setMatches(topMatches);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setStep(-1);
    setMatches([]);
  };

  return (
    <div className={styles.quizContainer}>
      <AnimatePresence mode="wait">
        {step === -1 && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={styles.welcomeScreen}
          >
            <h1 className={styles.title}>Find Your Perfect Plant</h1>
            <p className={styles.subtitle}>
              Answer 4 simple questions and we&apos;ll match you with the ideal botanical companion for your space and lifestyle.
            </p>
            <button className={styles.primaryButton} onClick={handleStart}>
              Start the Quiz
            </button>
          </motion.div>
        )}

        {step >= 0 && step < questions.length && (
          <motion.div
            key={`question-${step}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={styles.questionScreen}
          >
            <div className={styles.progressContainer}>
              <div 
                className={styles.progressBar} 
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              />
            </div>
            <span className={styles.stepIndicator}>Question {step + 1} of {questions.length}</span>
            <h2 className={styles.questionText}>{questions[step].question}</h2>
            <div className={styles.optionsGrid}>
              {questions[step].options.map((option, idx) => (
                <button
                  key={idx}
                  className={styles.optionButton}
                  onClick={() => handleAnswer(questions[step].id as keyof Answers, option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === questions.length && (
          <motion.div
            key="results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className={styles.resultsScreen}
          >
            <h2 className={styles.title}>Your Perfect Matches</h2>
            <p className={styles.subtitle}>Based on your lifestyle, these plants will thrive with you.</p>
            
            <div className={styles.matchesGrid}>
              {matches.map((plant, index) => (
                <motion.div 
                  key={plant.id} 
                  className={styles.matchCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  <div className={styles.matchImageWrapper}>
                    <Image 
                      src={plant.image} 
                      alt={plant.name}
                      fill
                      className={styles.matchImage}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className={styles.matchContent}>
                    <div className={styles.matchHeader}>
                      <h3>{plant.name}</h3>
                      {index === 0 && <span className={styles.topMatchBadge}>Top Match</span>}
                    </div>
                    <p className={styles.matchTagline}>{plant.tagline}</p>
                    <Link href={`/plants/${plant.slug}`} className={styles.viewButton}>
                      View Plant
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className={styles.secondaryButton} onClick={resetQuiz}>
              Retake Quiz
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
