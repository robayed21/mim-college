import { promises as fs } from "fs";
import path from "path";

export interface Teacher {
  id: string;
  name: string;
  designation: string;
  image: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
}

export interface SiteData {
  name: string;
  nameEn: string;
  location: string;
  eiin: string;
  phone: string;
  email: string;
  logo: string;
  heroImages: string[];
  stats: {
    teachers: number;
    staff: number;
    maleStudents: number;
    femaleStudents: number;
    totalStudents: number;
  };
  principal: {
    name: string;
    designation: string;
    image: string;
    message: string;
  };
  about: string;
  aboutImage: string;
}

const dataDir = path.join(process.cwd(), "data");

async function readJson<T>(file: string): Promise<T> {
  const filePath = path.join(dataDir, file);
  const raw = await fs.readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export async function getSite(): Promise<SiteData> {
  return readJson<SiteData>("site.json");
}

export async function getTeachers(): Promise<Teacher[]> {
  return readJson<Teacher[]>("teachers.json");
}

export async function getTeacher(id: string): Promise<Teacher | undefined> {
  const teachers = await getTeachers();
  return teachers.find((t) => t.id === id);
}

export async function getStaff(): Promise<Teacher[]> {
  return readJson<Teacher[]>("staff.json");
}

export async function getNotices(): Promise<Notice[]> {
  const notices = await readJson<Notice[]>("notices.json");
  return notices.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getNotice(id: string): Promise<Notice | undefined> {
  const notices = await getNotices();
  return notices.find((n) => n.id === id);
}

export async function saveNotices(notices: Notice[]): Promise<void> {
  const filePath = path.join(dataDir, "notices.json");
  await fs.writeFile(filePath, JSON.stringify(notices, null, 2), "utf-8");
}

export async function getGallery(): Promise<string[]> {
  return readJson<string[]>("gallery.json");
}
