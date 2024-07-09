import { Box, Container, Typography } from "@mui/material";
import { useLoaderData } from "@remix-run/react";

export default function Main() {
    const data = useLoaderData();

    return (
        <Container>
            <Box>
                <Typography>{data.title}</Typography>
                <Typography>{data.body}</Typography>
            </Box>
        </Container>
    );
}

export async function loader() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
        method: "GET"       
    });
    const data = await res.json();

    return data ?? {};
}