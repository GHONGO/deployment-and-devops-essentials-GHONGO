# Monitoring Setup

## Health Checks
- Backend exposes GET `/health` returning `{ status: 'ok' }` on success.
- Configure your uptime monitor (e.g., UptimeRobot) to poll this endpoint.

## Error Tracking (optional)
- Use Sentry SDKs; set `SENTRY_DSN` in environment.

## Performance
- Backend logs with `morgan` combined format (ship logs to your platform).
- Track API latency via platform metrics (Render/Railway) or add APM later.

## Maintenance
- Schedule weekly dependency updates and monthly DB backups.
- Document rollback: redeploy previous successful build on provider dashboard.

