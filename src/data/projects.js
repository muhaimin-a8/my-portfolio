// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Forum API - Backend Developer Expert Submission (Dicoding Indonesia)',
		problems: 'Untuk lulus dari kelas Backend Developer Expert di Dicoding Indonesia, Anda harus menyelesaikan tugas deployment proyek Forum API dengan menerapkan CI/CD serta mengimplementasikan limit access dan HTTPS.',
		category: 'REST API',
		img: require('@/assets/images/web-project-2.jpg'),
		details: {
			technologies: ['JavaScript', 'Docker', 'PostgreSQL', 'GitHub Workflows']
		}
	}
];

export default projects;
