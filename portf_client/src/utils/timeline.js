export const titleCaseKey = (key) => key.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

export const buildTimeline = (author) => {
    if (!author) return [];

    const entries = [];
    const { studies, certifications, employment } = author;

    if (studies?.highSchool) {
        const hs = studies.highSchool;
        entries.push({
            period: hs.period,
            title: hs.course,
            org: `${hs.schoolName}${hs.finalGrade ? ` — ${hs.finalGrade}` : ""}`,
            status: hs.completed ? "Completed" : "In Progress",
            kind: hs.completed ? "success" : "warning"
        });
    }

    Object.entries(certifications || {}).forEach(([key, cert]) => {
        entries.push({
            period: cert.issued,
            title: `${titleCaseKey(key)} ${cert.name}`,
            org: cert.type ? `${cert.type[0].toUpperCase()}${cert.type.slice(1)} Certification` : "Certification",
            status: "Issued",
            kind: "info"
        });
    });

    if (studies?.ITS) {
        const its = studies.ITS;
        entries.push({
            period: its.completed ? "Completed" : "Ongoing",
            title: its.course,
            org: `${its.ITSName}, ${its.location}`,
            status: its.completed ? "Completed" : "In Progress",
            kind: its.completed ? "success" : "warning"
        });
    }

    (employment || []).forEach((job) => {
        (job.contracts || []).forEach((contract) => {
            entries.push({
                period: contract.ongoing ? "Current" : `${contract.startDate} – ${contract.endDate}`,
                title: contract.role,
                org: `${job.company} — ${contract.department}`,
                status: contract.ongoing ? "Active" : "Completed",
                kind: contract.ongoing ? "success" : "muted"
            });
        });
    });

    return entries;
};
