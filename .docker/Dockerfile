FROM alpine:3.13

# If you're on Linux, you can change these to make sure your user has read-write access.
ARG USER_NAME
ARG USER_UID
ARG USER_GID
ARG REPO
ARG USER_GROUP
ARG NODE_JS_VERSION
ARG NODE_JS_DISTRO

ENV WORK_DIR /home/${USER_NAME}/src/${REPO}
ENV NODE_JS "https://nodejs.org/dist/${NODE_JS_VERSION}/node-${NODE_JS_VERSION}-${NODE_JS_DISTRO}.tar.xz"

# VS Code Requirements: openssh, musl, libgcc, libstdc++
# Spark Design System requires git, nodejs
# NodeJS requires libgcc, libstdc++, gccS
RUN apk --no-progress --purge --no-cache upgrade \
 && apk --no-progress --purge --no-cache add --upgrade \
    curl \
    git \
    gcc \
    gnupg \
    libgcc \
    libstdc++ \
    nodejs \
    npm \
    openssh \
    tini \
 && apk --no-progress --purge --no-cache upgrade \
 && rm -vrf /var/cache/apk/*

# Install vanilla GLibC: https://github.com/sgerrand/alpine-pkg-glibc
RUN curl -o /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub \
 && curl -LO https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.32-r0/glibc-2.32-r0.apk \
 && apk add glibc-2.32-r0.apk

# RUN curl -fL -o /tmp/nodejs.tar.xz "${NODE_JS}" \
#  && mkdir -p /usr/local/lib/nodejs \
#  && tar -xJvf /tmp/nodejs.tar.xz -C /usr/local/lib/nodejs \
#  && rm -f /tmp/nodejs.tar.xz

# ENV PATH "/usr/local/lib/nodejs/node-${NODE_JS_VERSION}-${NODE_JS_DISTRO}/bin:${PATH}"

# Add a non-root group and user, helpful if you dev on Linux.
RUN addgroup --system --gid $USER_GID $USER_GROUP \
 && adduser --system \
    --disabled-password \
    --ingroup $USER_GROUP \
    --uid $USER_UID \
    $USER_NAME

USER $USER_NAME

# VSCode Requirements for pre-installing extensions
RUN mkdir -p /home/$USER_NAME/.vscode-server \
    /home/$USER_NAME/.vscode-server-insiders \
    ~/src/${REPO}

WORKDIR $WORK_DIR

ENTRYPOINT [ "tini", "--" ]

CMD [ "node", "-r", "./logs", "./log" ]
