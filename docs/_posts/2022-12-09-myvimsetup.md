layout: post
title: My Neo/Vim Setup for Debian (with Neovim 0.8+)
description: because all the Neovim guides I found had steps exclusive to Ubuntu.
---------------------------------------------------------------------------------

Hello Vim newcomers and Debian users,

I'm getting accustomed to Vim (and Neovim) recently after 2 years of hobby coding in VS Code.
I'm using it for two reasons: First, due to my basic VPS plan with 1GB RAM, VS Code is not the best with more *essential* extensions installed to my workspace, I may not have enough RAM space for testing so it's Vim in the meantime.
Second, The OS for VPS I use is Debian 11 "Bullseye" so this is the same barebone Ubuntu was built on but without the PPAs. Let's not do the PPA method.

Configuring Vim (and Neovim) took me 2 days to match my VS Code settings, it felt like a project itself.

Before the first step, I like to inform that the version of Neovim from `sudo apt-get install neovim` is [0.4.4-1](https://packages.debian.org/bullseye/neovim) so not all plugins you want may not work best. If your Debian has this version of Neovim installed, it has to be removed (`sudo apt remove neovim`).

Hope this tutorial helps and saves you from hours of Googling.

**Step 1.** Download the .deb package from latest stable build of Neovim Github repository. Convenient if done in home directory (`cd $HOME`)

```
curl -L -O "https://github.com/neovim/neovim/releases/download/stable/nvim-linux64.deb"
```

**Step 2.** Install the package using `sudo apt install ./nvim-linux64.deb`

However, when I followed this step from Neovim repo, I encountered these dpkg-deb Broken pipe and Run 13 errors pictured below.

![](https://i.imgur.com/muGeT6a.png)

Here's a workaround: `sudo dpkg -i --force-overwrite ./nvim-linux64.deb` then `sudo apt -f install`

Thanks [StackOverflow](https://askubuntu.com/questions/1062171/dpkg-deb-error-paste-subprocess-was-killed-by-signal-broken-pipe). I was hesitant because of `--force-overwrite` but it worked. A normal .deb install didn't work even if previous Neovim was already removed.

**Step 3.** Run `nvim`. Neovim is now on its latest version (v0.8.1).

![](https://i.imgur.com/cs8ryg8.png)

**Bonus Step.** When you add plugins to *.vimrc* or *.config/nvim/init.vim*, you may encounter warnings like this:

![](https://i.imgur.com/n1e8SIb.png)

This happened in Neovim 0.4.4-1. Here's my setup.

For *.config/nvim/init.vim*: Obtained from `:help nvim-from-vim`

```
set runtimepath^=~/.vim runtimepath+=~/.vim/after
let &packpath = &runtimepath
source ~/.vimrc
```

For *.vimrc*: If you came from `vimtutor`, you may have this somewhere:

```
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
Here's my vim-plug setup example in *.vimrc*:

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

As you see, different plugins need minimum version of Vim or Neovim, take [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) for example. Its README says, "Make sure use vim >= 8.1.1719 or neovim >= 0.4.0." The `!has('nvim')` syntax is to ensure it is not running Neovim and the *vim* other than Neovim is running version higher than and not equal to 8.0.

The version scheming between these two Vims are different, check yours by typing `:echo v:version` from Normal mode. The `0.4.4` in Neovim could mean `404` and `8.2` in Vim could mean `802`.

I'll try to update Vim 8.2 to 9.0 next by means other than [Debian stable packages](https://packages.debian.org/bullseye/vim) or maybe give up and settle for Neovim.
