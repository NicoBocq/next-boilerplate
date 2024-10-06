import '@testing-library/jest-dom'

import { vi } from 'vitest'

vi.mock('@/services/api', () => ({
  get: vi.fn(),
  post: vi.fn(),
  put: vi.fn(),
  delete: vi.fn(),
}))
