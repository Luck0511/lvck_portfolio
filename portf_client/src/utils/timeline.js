export const titleCaseKey = (key) => key.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

export const buildTimeline = (author) => {
    if (!author) return [];

    const entries = [];
    const { studies, certifications, employment } = author;

    Object.entries(studies).forEach(([key, study]) => {
        entries.push({
            period: study.period,
            title: study.course,
            org: `${study.name}, ${study.location}`,
            status: study.completed ? "Completed" : "In Progress",
            kind: study.completed ? "success" : "warning"
        });
    });

    (employment || []).forEach((job) => {
        (job.contracts || []).forEach((contract) => {
            entries.push({
                period: contract.ongoing ? `${contract.startDate} – Current` : `${contract.startDate} – ${contract.endDate}`,
                title: contract.role,
                org: `${job.company} - ${contract.department}`,
                status: contract.ongoing ? "Active" : "Closed",
                kind: contract.ongoing ? "success" : "muted"
            });
        });
    });

    return entries;
};
