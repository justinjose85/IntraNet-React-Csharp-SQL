export async function getAllIssues() {

    const response = await fetch('/api/issues');
    return await response.json();
}

export async function createIssue(data) {
    const response = await fetch(`/api/issue`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}