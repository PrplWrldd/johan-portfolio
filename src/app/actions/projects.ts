'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

/**
 * Fetch all published projects ordered by displayOrder
 */
export async function getProjects() {
  try {
    return await prisma.project.findMany({
      orderBy: { displayOrder: 'asc' },
      include: { stats: true },
    });
  } catch (error) {
    console.error('Failed to fetch projects from Supabase:', error);
    return [];
  }
}

/**
 * Increment project view counter
 */
export async function incrementProjectView(projectSlug: string) {
  try {
    const stat = await prisma.projectStat.upsert({
      where: { projectSlug },
      update: { views: { increment: 1 } },
      create: { projectSlug, views: 1, likes: 0 },
    });
    return { success: true, views: stat.views };
  } catch (error) {
    console.error('Failed to increment project views:', error);
    return { success: false, views: 0 };
  }
}

/**
 * Increment project like counter
 */
export async function likeProject(projectSlug: string) {
  try {
    const stat = await prisma.projectStat.upsert({
      where: { projectSlug },
      update: { likes: { increment: 1 } },
      create: { projectSlug, views: 1, likes: 1 },
    });
    revalidatePath('/');
    return { success: true, likes: stat.likes };
  } catch (error) {
    console.error('Failed to like project:', error);
    return { success: false, likes: 0 };
  }
}
