import { Transform } from 'class-transformer'

const mappings = {
    1610610024: 1610612764, // baltimore bullets to washington wizards
    1610610027: 1610612743 // denver nuggets to the denver nuggets for some reason
}

export const TransformTeamId = () =>
    Transform(({ value }) => mappings[value] ?? value)
