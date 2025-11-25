import type { HealthTip, PsychTip } from '../types';

export const healthTips: HealthTip[] = [
  {
    title: '20-20-20 Rule',
    description: 'Every 20 minutes, look at something 20 feet away for 20 seconds to reduce eye strain.',
    frequency: 'Every 20 minutes',
  },
  {
    title: 'Stand Up',
    description: 'Stand and move for 2-3 minutes every 30 minutes to improve circulation.',
    frequency: 'Every 30 minutes',
  },
  {
    title: 'Hydrate',
    description: 'Drink water regularly. Aim for 8oz every hour during work.',
    frequency: 'Every hour',
  },
  {
    title: 'Posture Check',
    description: 'Feet flat on floor, back supported, screen at eye level, elbows at 90°.',
    frequency: 'Every hour',
  },
];

export const psychTips: PsychTip[] = [
  { title: 'Pomodoro Technique', tip: '25 min work, 5 min break cycles improve focus and prevent burnout' },
  { title: 'Context Switching', tip: 'Batch similar tasks together. Switching between tasks can reduce productivity by 40%' },
  { title: 'Deep Work Blocks', tip: 'Schedule 2-4 hour blocks of uninterrupted time for complex problems' },
  { title: 'Imposter Syndrome', tip: 'Common in tech. Document wins, seek mentorship, remember everyone was once a beginner' },
];

export const exercises = [
  '🧘 Neck rolls: 10 slow circles each direction',
  '💪 Shoulder shrugs: Hold for 5 seconds, repeat 10 times',
  '🙌 Wrist stretches: Extend and flex, hold each for 10 seconds',
  '🦵 Seated leg raises: 15 reps each leg',
  '🔄 Torso twists: 10 twists each side while seated',
];
