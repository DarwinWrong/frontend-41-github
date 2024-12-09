export async function decodeFile(path) {
    const response = await fetch(`${path}`);
    const encodeContent = await response.text();

    const decodedContent = new TextDecoder('utf-8').decode(
        Uint8Array.from(atob(encodeContent), char => char.charCodeAt(0))
    );

    const decodeText = JSON.parse(decodedContent);

    return decodeText;
}