// import * as Sentry from '@sentry/nextjs'; // disabled

export async function register() {
  // Sentry registration disabled
}

// export const onRequestError = Sentry.captureRequestError; // disabled
export const onRequestError = (_error: any) => {}; // no-op
