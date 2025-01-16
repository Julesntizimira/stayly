import { NextResponse, NextRequest } from "next/server";
import { writeFile } from "fs/promises";
// import path from "path";



export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.formData();
        const title = reqBody.get('title') as string
        const owner = reqBody.get('owner') as string
        const type = reqBody.get('type') as string
        const location = reqBody.get('location') as string
        const description = reqBody.get('description') as string
        const price_per_night = reqBody.get('price_per_night') as string
        const is_whole_unit_bookable = reqBody.get('is_whole_unit_bookable') as string
        const is_breakfast_included = reqBody.get('is_breakfast_included') as string
        const is_cancelation_flexible = reqBody.get('is_cancelation_flexible') as string
        const is_instant_booking = reqBody.get('is_instant_booking') as string
        const amenities = reqBody.getAll('amenities') as string[]
        const imageFiles = reqBody.getAll('image_url')



  

        const property: {
            owner: string;
            title: string;
            type: string;
            location: string;
            description: string;
            price_per_night: string;
            is_whole_unit_bookable: string;
            is_breakfast_included: string;
            is_cancelation_flexible: string;
            is_instant_booking: string;
            image_urls: string[];
            amenities: string[];
        } = {
            owner, 
            title,
            type,
            location,
            description,
            price_per_night,
            is_whole_unit_bookable,
            is_breakfast_included,
            is_cancelation_flexible,
            is_instant_booking,
            image_urls: [],
            amenities: [],
        }

        if (imageFiles) {
            const fileProcessingPromises = imageFiles.map(async (file: FormDataEntryValue) => {
                const bytes = await (file as File).arrayBuffer();
                const buffer = Buffer.from(bytes);
                const modifiedFileName = `${Date.now().toString()}_${(file as File).name}`;
                const imgPath = `public/images/properties/${modifiedFileName}`;
                await writeFile(imgPath, buffer);
                return `/images/properties/${modifiedFileName}`;
            });

            // Wait for all files to be processed
            const imageUrls = await Promise.all(fileProcessingPromises);
            property.image_urls.push(...imageUrls);
        }
        if (amenities) {
            property.amenities.push(...amenities);
        }

        console.log(property);


        const res = await fetch('http://localhost:8000/properties/create/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(property),
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

    } catch (error: unknown) {
        console.error(error);
        return NextResponse.json(
            { error: "server failed" },
            { status: 500 }
        )
    }
}