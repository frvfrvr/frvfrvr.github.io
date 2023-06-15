---
layout: post
title: How to install latest version (0.9+) of Neovim on Debian instead of .deb and apt-get
description: because Neovim no longer releases .deb package
---
Hello Vim newcomers and Debian users,

On the [last tutorial](https://frvfrvr.github.io/2022/12/09/myvimsetup), Neovim was on [version 0.8.1](https://github.com/neovim/neovim/releases/tag/v0.8.1) and had a .deb package in their latest releases.
However, from version 0.9.0 onwards, it no longer publishes the .deb package because of [maintenance burden](https://github.com/neovim/neovim/pull/22773).

This removal offered some alternatives: AppImage and Tarball (*.tar.gz*) package

Before the first step, I like to inform that the version of Neovim from

```bash
sudo apt list neovim -a
```

...is [neovim/oldstable 0.4.4-1 amd64](https://packages.debian.org/bullseye/neovim) so not all plugins you want may not work best.

If your Debian has this version of Neovim installed or from last tutorial's version 0.8.1, no worries, leave it be.

In this tutorial, we will install both AppImage and Tarball package in separate directories and test if any of these apply the config we made in [Bonus Step](#bonus-step). If you have desired release, you can skip Step 0 and install on `$HOME`.

However for AppImage, I recommend creating a directory for extraction of AppImage later if you don't have FUSE working.

Hope this tutorial helps and saves you from hours of Googling.



**Step 0 (Optional).** Create a directory for either AppImage or Tarball package and redirect to it. Convenient if done in home directory (`cd $HOME`)

AppImage:

```bash
mkdir nvim_appimage && cd "$_"
```

![](https://i.imgur.com/d8xo5Ne.png)

Tarball:

```bash
mkdir nvim_tarball && cd "$_"
```

**Step 1.** Download the AppImage or Tarball package from latest stable build of Neovim Github repository.

AppImage:

```bash
curl -L -O "https://github.com/neovim/neovim/releases/download/stable/nvim.appimage"
```

Tarball:

```bash
curl -L -O "https://github.com/neovim/neovim/releases/download/stable/nvim-linux64.tar.gz"
```

**Step 2 (AppImage).** Make the AppImage executable and try running it.

```bash
chmod u+x nvim.appimage && ./nvim.appimage --version
```

However if you get this error:

```
dlopen(): error loading libfuse.so.2 
AppImages require FUSE to run. 

You might still be able to extract the contents of this AppImage 
if you run it with the --appimage-extract option.

```

Run this:

```bash
sudo apt install fuse
```

or extract the AppImage and run instead:

```bash
./nvim.appimage --appimage-extract
./squashfs-root/AppRun
```

![](https://i.imgur.com/mKr7uo0.png)

**Step 2 (Tarball).** Extract the `nvim-linux64.tar.gz`

```bash
tar xzvf nvim-linux64.tar.gz
```

![](https://i.imgur.com/mZQHg7g.png)

Then check the version:

```bash
./nvim-linux64/bin/nvim --version
```

![](https://i.imgur.com/gMAKrwk.png)

**Step 3.** Create an alias for Neovim. We'll use the directory created in Step 0 as an example. You can replace the directory inside single quotes to your desired executable. If you use Bash, change `.zshrc` to `.bashrc`.

AppImage:

```bash
echo -e "\nalias nvim9='/root/nvim_appimage/squashfs-root/AppRun'" >> ~/.zshrc
```

Tarball:

```bash
echo -e "\nalias nvim9='/root/nvim_tarball/nvim-linux64/bin/nvim'" >> ~/.zshrc
```

Run `nvim9`. Neovim is now on its latest version (v0.9.1).

![](https://i.imgur.com/u1aCNk3.png)

![](https://i.imgur.com/VbieyCU.png)

# **Bonus Step**

When you add plugins to *.vimrc* or *.config/nvim/init.vim*, you may encounter warnings like this:

![](https://i.imgur.com/n1e8SIb.png)

This happened in Neovim 0.4.4-1. Here's my setup.

For *.config/nvim/init.vim*: Obtained from `:help nvim-from-vim`

```vim
set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vimrc
```

For *.vimrc*: If you came from `vimtutor`, you may have this somewhere:

```vim
" Get the defaults that most users want.
source $VIMRUNTIME/defaults.vim
```

Add this *if-else* between *source $VIMRUNTIME*...

```vim
" Get the defaults that most users want.
if !has('nvim')
    source $VIMRUNTIME/defaults.vim
endif
```

Condition if it's not running Neovim, Vim defaults will load.
Here's my [vim-plug](https://github.com/junegunn/vim-plug) setup example in *.vimrc*:

```vim
call plug#begin(has('nvim') ? stdpath('data') . '/plugged' : '~/.vim/plugged')

if (has('nvim') && v:version > 500)
    Plug 'projekt0n/github-nvim-theme'
endif
if has('nvim') || (!has('nvim') && v:version > 900)
    Plug 'github/copilot.vim'
endif
if (has('nvim') && v:version > 400) || (!has('nvim') && v:version > 800)
    Plug 'neoclide/coc.nvim'
endif

Plug 'preservim/nerdtree'
" rest of Plug's here.

call plug#end()

```

As you see, different plugins need minimum version of Vim or Neovim, take [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) for example. Its README says, "Make sure use vim >= 8.1.1719 or neovim >= 0.4.0." The `(!has('nvim') && v:version > 800)` syntax is to ensure it is not running Neovim and the *vim* other than Neovim is running version higher than and not equal to 8.0.

The version scheming between these two Vims are different, check yours by typing `:echo v:version` from Normal mode. The `0.4.4` in Neovim could mean `404` and `8.2` in Vim could mean `802`.


It works.

![](https://i.imgur.com/MFK7s0P.png)
