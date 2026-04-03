import { Application, Recommendation } from "@/shared/types/lamaran"

export const DUMMY_APPLICATIONS: Application[] = [
  {
    id: '1',
    position: 'UI/UX Designer',
    company: 'Tokopedia',
    workType: 'Remote',
    employmentType: 'Full - time',
    status: {
      sent: true,
      hrReviewed: false,
      interview: false,
      offering: false,
      selected: false,
    },
    interviewScheduled: false,
    appliedDate: '10 Maret 2026',
  },
  {
    id: '2',
    position: 'UI/UX Designer',
    company: 'Tokopedia',
    workType: 'Remote',
    employmentType: 'Full - time',
    status: {
      sent: true,
      hrReviewed: true,
      interview: false,
      offering: false,
      selected: false,
    },
    interviewScheduled: false,
    appliedDate: '10 Maret 2026',
  },
  {
    id: '3',
    position: 'UI/UX Designer',
    company: 'Tokopedia',
    workType: 'Remote',
    employmentType: 'Full - time',
    status: {
      sent: true,
      hrReviewed: true,
      interview: true,
      offering: false,
      selected: false,
    },
    interviewScheduled: true,
    interviewDate: '16 Maret 2026',
    appliedDate: '10 Maret 2026',
  },
]

export const RECOMMENDATIONS = [
  { id: '1', company: 'Gojek', type: 'Aksesibilitas' },
  { id: '2', company: 'Gojek', type: 'Aksesibilitas' },
  { id: '3', company: 'Gojek', type: 'Aksesibilitas' },
  { id: '4', company: 'Gojek', type: 'Aksesibilitas' },
]