# nguyenhuudo01.github.io
![image](https://user-images.githubusercontent.com/90119582/186044744-9fc30893-8caf-44da-bead-24f4aca8658e.png)

# Getting Started
Welcome to our monorepo project, housing the core spectacle package and related tools and examples.

Come learn more at our docs site!

# Prerequisites
Git
Node: any 12.x version starting with v12.0.0 or greater
Yarn v1: See Yarn website for installation instructions
A fork of the repo (for any contributions)
A clone of the reactjs.org repo on your local machine


# Installation
cd reactjs.org to go into the project root
yarn to install the website's npm dependencies

# Running locally
yarn dev to start the hot-reloading development server (powered by Gatsby)
open http://localhost:8000 to open the site in your favorite browser

# Contributing

# Guidelines
The documentation is divided into several sections with a different tone and purpose. If you plan to write more than a few sentences, you might find it helpful to get familiar with the contributing guidelines for the appropriate sections.

# Create a branch
git checkout main from any folder in your local reactjs.org repository
git pull origin main to ensure you have the latest main code
git checkout -b the-name-of-my-branch (replacing the-name-of-my-branch with a suitable name) to create a branch

# Make the change
Follow the "Running locally" instructions
Save the files and check in the browser
Changes to React components in src will hot-reload
Changes to markdown files in content will hot-reload
If working with plugins, you may need to remove the .cache directory and restart the server

# Test the change
If possible, test any visual changes in all latest versions of common browsers, on both desktop and mobile.
Run yarn check-all from the project root. (This will run Prettier, ESLint, and Flow.)

# Push it
git add -A && git commit -m "My message" (replacing My message with a commit message, such as Fix header logo on Android) to stage and commit your changes
git push my-fork-name the-name-of-my-branch
Go to the reactjs.org repo and you should see recently pushed branches.
Follow GitHub's instructions.If possible, include screenshots of visual changes. A preview build is triggered after your changes are pushed to GitHub.

# Translation
If you are interested in translating reactjs.org, please see the current translation efforts at translations.reactjs.org.

If your language does not have a translation and you would like to create one, please follow the instructions at reactjs.org Translations.

# Troubleshooting
yarn reset to clear the local cache

# License
Content submitted to reactjs.org is CC-BY-4.0 licensed, as found in the LICENSE-DOCS.md file.
