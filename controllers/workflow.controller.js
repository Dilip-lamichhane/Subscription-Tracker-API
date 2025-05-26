import dayjs from 'dayjs';
import Subscription from '../models/subscription.model.js';

const REMINDERS = [7, 5, 2, 1];

export const setReminders = async (req, res, next) => {
    try {
        const { subscriptionId } = req.body;
        const subscription = await fetchSubscription(subscriptionId);

        if (!subscription || subscription.status !== 'active') {
            return res.status(404).json({
                success: false,
                message: 'Subscription not found or not active'
            });
        }

        const renewalDate = dayjs(subscription.renewalDate);

        if (renewalDate.isBefore(dayjs())) {
            return res.status(400).json({
                success: false,
                message: `Renewal date has passed for subscription ${subscriptionId}`
            });
        }

        const reminders = [];
        for (const daysBefore of REMINDERS) {
            const reminderDate = renewalDate.subtract(daysBefore, 'day');
            if (reminderDate.isAfter(dayjs())) {
                reminders.push({
                    daysBefore,
                    reminderDate: reminderDate.toDate()
                });
            }
        }

        res.status(200).json({
            success: true,
            message: 'Reminders set successfully',
            data: {
                subscription,
                reminders
            }
        });
    } catch (error) {
        next(error);
    }
};

const fetchSubscription = async (subscriptionId) => {
    return await Subscription.findById(subscriptionId).populate('user', 'name email');
};

const triggerReminder = async (label, subscription) => {
    console.log(`Triggering ${label} reminder for subscription: ${subscription._id}`);
    // Add your reminder logic here (e.g., send email, notification, etc.)
};