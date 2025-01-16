import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {id} = reqBody;

        // Make a GET request to the Django API to get the list of users
        const res = await fetch(`http://localhost:8000/profiles/get/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Check the response from Django API
        if (res.ok) {
            const data = await res.json();

            // Return the successful response to the frontend
            return NextResponse.json(data, { status: 200 });
        } else {
            const errorData = await res.json();
            // Return the error response if the login fails
            return NextResponse.json({ error: errorData }, { status: res.status });
        }
    } catch (error) {
        // Handle unexpected errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}