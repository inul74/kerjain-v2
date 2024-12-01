"use server";

import { getAuthSession } from "@/lib/auth";
import { prismaDB } from "@/providers/connection";
import { revalidatePath } from "next/cache";

export const createOrganization = async (data: {
  title: string;
  image: string;
}) => {
  const session = getAuthSession();

  if (!session) {
    return {
      error: "unauthorized",
    };
  }

  const { title, image } = data;
  let organization;

  try {
    organization = await prismaDB.organization.create({
      data: {
        title,
        image,
      },
    });
  } catch (error) {
    return {
      error: "organization not created",
    };
  }

  revalidatePath("/");
  return { result: organization };
};
