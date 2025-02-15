
const fetchCases = async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}data.json`);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};

const fetchCaseStudyBySlug = async (slug) => {
    const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const foundCase = data.find((item) => item.slug === slug);

    if (!foundCase) {
        throw new Error(`Case study with slug "${slug}" not found.`);
    }
    return foundCase;
};

export { fetchCases, fetchCaseStudyBySlug }