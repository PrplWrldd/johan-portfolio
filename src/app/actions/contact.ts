'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export interface SubmitContactState {
  success: boolean;
  message?: string;
  error?: string;
}

export async function submitContactMessage(
  _prevState: SubmitContactState | null,
  formData: FormData
): Promise<SubmitContactState> {
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const subject = formData.get('subject')?.toString().trim() || null;
  const message = formData.get('message')?.toString().trim();

  if (!name || !email || !message) {
    return {
      success: false,
      error: 'Please fill in your name, email, and message.',
    };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: 'Please provide a valid email address.',
    };
  }

  try {
    await prisma.contactMessage.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    revalidatePath('/');
    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    };
  } catch (error) {
    console.error('Prisma Supabase Contact Submission Error:', error);
    return {
      success: false,
      error: 'Unable to save your message right now. Please try again or email directly.',
    };
  }
}
