function showResults() {
    const quiz = document.getElementById('fitnessQuiz');
    const responses = new FormData(quiz);

    let fitnessLevel = 0;
    let report = '';
    let feedback = '';

    // Analyze each question response
    responses.forEach((value, key) => {
        switch (key) {
            case 'q1':
                report += `Physical activity: ${getActivityFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
            case 'q2':
                report += `Diet: ${getDietFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
            case 'q3':
                report += `Sitting time: ${getSittingFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
            case 'q4':
                report += `Fruits & veggies intake: ${getVeggiesFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
            case 'q5':
                report += `Strength training: ${getStrengthFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
            case 'q6':
                report += `Sleep quality: ${getSleepFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
            case 'q7':
                report += `Fitness goal: ${getGoalFeedback(value)}\n`;
                break;
            case 'q8':
                report += `Workout duration: ${getWorkoutDurationFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
            case 'q9':
                report += `Cardiovascular endurance: ${getEnduranceFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
            case 'q10':
                report += `Post-workout energy: ${getEnergyFeedback(value)}\n`;
                fitnessLevel += getScore(value);
                break;
        }
    });

    // Generate fitness level feedback
    if (fitnessLevel >= 15) {
        feedback = "You're in excellent shape! Keep up the great work and continue challenging yourself.";
    } else if (fitnessLevel >= 10) {
        feedback = "You're on the right track, but there are areas for improvement. Focus on your diet and consistency.";
    } else {
        feedback = "It seems you're at the start of your fitness journey. Consider setting clear goals and working on one area at a time to improve.";
    }

    // Store the results in localStorage
    localStorage.setItem('fitnessReport', report);
    localStorage.setItem('fitnessFeedback', feedback);

    // Redirect to the report page
    window.location.href = 'report.html';
}

// Helper functions for feedback on each question

// Feedback for physical activity
function getActivityFeedback(value) {
    switch (value) {
        case 'none':
            return "You don't engage in physical activity. It's important to start small and be consistent.";
        case '1-2 days':
            return "You do light physical activity. Try to increase the intensity or duration over time.";
        case '3-4 days':
            return "You're moderately active. Keep it up and consider challenging yourself more.";
        case '5+ days':
            return "You're very active! Excellent job, continue pushing your limits.";
        default:
            return "";
    }
}

// Feedback for diet
function getDietFeedback(value) {
    switch (value) {
        case 'Unhealthy - Fast food, sugary drinks':
            return "Your diet is poor. Consider balancing your meals with more nutritious options.";
        case ' Average - Some healthy, some unhealthy':
            return "Your diet is average. Try to incorporate more whole foods and balanced meals.";
        case ' Healthy - Balanced, lots of veggies':
            return "You have a good diet. Keep up the great work!";
        case 'Healthy - Balanced, lots of veggies':
            return "Your diet is excellent! You're making the right choices.";
        default:
            return "";
    }
}

// Feedback for sitting time
function getSittingFeedback(value) {
    switch (value) {
        case ' More than 8 hours':
            return "You sit for 8+ hours a day. Consider standing breaks and stretching exercises.";
        case '5-8 hours':
            return "You sit for 5-8 hours a day. Try to take more frequent breaks and walk around.";
        case '4-6':
            return "You sit for 4-6 hours a day. That's reasonable, but still try to stay active.";
        case ' Less than 5 hours':
            return "You sit less than 4 hours a day. Great job in keeping active!";
        default:
            return "";
    }
}

// Feedback for fruit & veggies intake
function getVeggiesFeedback(value) {
    switch (value) {
        case 'none':
            return "You don't eat fruits or vegetables. Adding them to your diet is essential for good health.";
        case 'Less than 2 servings':
            return "You occasionally eat fruits and vegetables. Try to make it a daily habit.";
        case '3-4 servings':
            return "You regularly eat fruits and vegetables. You're on the right track!";
        case '5+ servings':
            return "You eat fruits and vegetables daily. Fantastic job!";
        default:
            return "";
    }
}

// Feedback for strength training
function getStrengthFeedback(value) {
    switch (value) {
        case 'none':
            return "You don't do any strength training. Strength exercises can help build muscle and endurance.";
        case 'Rarely':
            return "You do strength training occasionally. Try to make it a part of your regular routine.";
        case '1-2 timesa week':
            return "You regularly do strength training. Keep building those muscles!";
        case '3+ times a week':
            return "You do intense strength training. Awesome work!";
        default:
            return "";
    }
}

// Feedback for sleep quality
function getSleepFeedback(value) {
    switch (value) {
        case 'Poor - Less than 5 hours':
            return "Your sleep quality is poor. Consider improving your sleep hygiene.";
        case ' Average - 5-7 hours':
            return "Your sleep quality is fair. Try to aim for consistent, restful sleep.";
        case 'Good - 8+ hours':
            return "You have good sleep quality. Keep up the healthy habits!";
        case 'excellent':
            return "You have excellent sleep quality. Great job in prioritizing rest.";
        default:
            return "";
    }
}

// Feedback for fitness goal
function getGoalFeedback(value) {
    switch (value) {
        case 'Lose weight':
            return "Your goal is weight loss. Focus on balanced nutrition and consistent exercise.";
        case ' Gain muscle':
            return "Your goal is muscle gain. Strength training and protein intake are key.";
        case 'Improve endurance':
            return "Your goal is endurance. Cardio workouts and stamina training will help you.";
        case 'Maintain health':
            return "Your goal is general fitness. A well-rounded routine will keep you healthy.";
        default:
            return "";
    }
}

// Feedback for workout duration
function getWorkoutDurationFeedback(value) {
    switch (value) {
        case 'none':
            return "You don't currently work out. Start with short, easy exercises and build up.";
        case 'Less than 30 minutes':
            return "Your workouts are short. Try to gradually increase the duration.";
        case '30-60 minutes':
            return "You work out for 30-60 minutes. Great job maintaining consistency!";
        case 'More than 60 minutes':
            return "You work out for more than 60 minutes. Keep pushing yourself!";
        default:
            return "";
    }
}

// Feedback for cardiovascular endurance
function getEnduranceFeedback(value) {
    switch (value) {
        case 'Poor':
            return "Your cardiovascular endurance is poor. Consider incorporating more cardio into your routine.";
        case 'Average':
            return "Your cardiovascular endurance is average. Keep working to improve.";
        case 'Good':
            return "Your cardiovascular endurance is good. You're doing well, keep it up!";
        case 'Excellent':
            return "You have excellent cardiovascular endurance. Keep pushing yourself!";
        default:
            return "";
    }
}

// Feedback for post-workout energy
function getEnergyFeedback(value) {
    switch (value) {
        case 'Rarely':
            return "You rarely feel energized after a workout. Try adjusting your nutrition and hydration before exercising.";
        case 'Sometimes':
            return "You sometimes feel energized after a workout. Consistency in nutrition and recovery might help you feel even better.";
        case 'Always':
            return "You always feel energized after a workout! Great job maintaining the right balance in your routine.";
        default:
            return "";
    }
}


// Helper function to assign points based on responses
function getScore(value) {
    switch (value) {
        case 'none':
        case 'poor':
        case '8+':
        case 'exhausted':
            return 0;  // Low score for negative answers
        case 'light':
        case 'average':
        case '6-8':
        case 'tired':
            return 1;  // Medium score
        case 'moderate':
        case 'good':
        case '4-6':
        case 'energized':
            return 2;  // Good score
        case 'intense':
        case 'excellent':
        case 'less than 4':
        case 'very energized':
            return 3; 
            default:
                return 0;
        }
    }

    