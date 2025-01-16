import { NextResponse, NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {id} = reqBody;

        // Make a GET request to the Django API to get the list of users
        const res = await fetch(`http://localhost:8000/properties/get/${id}`, {
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
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }
}