import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {apiVersion, dataset, projectId} from './sanity/env'
import schemas from "./sanity/schemas"

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  schema: { types: schemas },
  title: "V-Cred Studio",
  plugins: [
    deskTool(),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
