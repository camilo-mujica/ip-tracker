import { NextApiRequest, NextApiResponse } from "next";

interface tokenData {
    token: string;
}

interface googleResponse {
    success: boolean;
    "error-codes"?: Array<any>;
    message?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { token }: tokenData = JSON.parse(req.body);

    try {
        const response = await validateHuman(token);
        if (response["error-codes"]) {
            response.message = response["error-codes"].toString();
        }
        res.status(200);
        res.json(response);
    } catch (error) {
        res.status(400);
        res.json({
            success: false,
            message: "There has been a problem with your request",
        });
    }
}

async function validateHuman(token: string): Promise<googleResponse> {
    const secret = process.env.RECAPTCHA_SECRET_KEY;

    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
        { method: "POST" }
    );

    const data: googleResponse = await response.json();

    return data;
}
