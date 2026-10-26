# AC Cloud development

This is the standalone desktop runtime, not the original art-production archive.
Read README.md, docs/DEVELOPMENT.md and THIRD_PARTY_NOTICES.md before changes.

- Keep existing motion curves, original resource bytes and dialogue behavior unless that change is requested. A10 retains its recorded needsAdjustment status.
- The local HTTP server resolves original virtual URLs using app/release-manifest.json. Do not redirect them to physical blob URLs: relative loads and query-based instance separation depend on their original URL.
- Editable desktop code is in app/desktop. Shared runtime dependencies are in app/assets; the manifest maps virtual names to content-hash files. Inspect actual contents before changing references.
- When intentionally editing app files, run python scripts/update_manifest.py before starting or building. For new resources, add a route and file entry to the manifest. Do not disable integrity checks to hide missing dependencies.
- Verify startup, affected actions, transitions, 100–300 px sizing, interruption, dialogue, input passthrough and settings persistence. Packaging changes also require testing from another directory without the original project.
- Runtime settings belong to the current user's application-data directory. Never commit settings, credentials, caches, node_modules or dist.
- Treat third-party engine licenses and character/art rights separately; do not give all assets a blanket code license.
