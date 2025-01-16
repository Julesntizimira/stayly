import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        // Parse the incoming request body to get username and password
        const reqBody = await request.json();
        const { 
            username,
            name,
            email,
            password,
            nationality,
            phoneNumber,
            countryCode,
            birthDate,
        } = reqBody;


        // console.log(reqBody);

        // Make a POST request to the Django API to authenticate the user
        const res = await fetch('http://localhost:8000/profiles/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                name,
                email,
                password,
                nationality,
                phone_number: countryCode + phoneNumber,
                date_of_birth: birthDate
            }),
        });

        // Check the response from Django API
        if (res.ok) {
            const data = await res.json();

            // Return the successful response to the frontend
            return NextResponse.json(data, { status: 201 });
        } else {
            const errorData = await res.json();
            // Return the error response if the login fails
            return NextResponse.json({ error: errorData }, { status: res.status });
        }

    } catch (error: any) {
        // Handle unexpected errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
