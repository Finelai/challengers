import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = formData.get('name')
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    if (!name || !password || !email) throw new Error('provide all data to create new user: name, email, password');
    await sql`INSERT INTO Users (name, password, email) VALUES (${name}, ${password}, ${email});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ users }, { status: 200 });
}
