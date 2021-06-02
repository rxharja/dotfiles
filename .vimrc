call plug#begin('~/.vim/plugged')
#Plug 'junegunn/vim-easy-align'
#Plug 'itchyny/lightline.vim'
Plug 'junegunn/goyo.vim'
#Plug 'scrooloose/nerdtree'
#Plug 'Townk/vim-autoclose'
#Plug 'https://github.com/tpope/vim-surround.git'
#Plug 'https://github.com/etdev/vim-hexcolor.git'
call plug#end()

" lightline config
#set laststatus=2
#set noshowmode 
#let g:lightline = { 'colorscheme': 'PaperColor' }

" Nerdtree config
#map <C-o> :NERDTreeToggle<CR>

" Movement config
map <C-h> <C-W>h
map <C-j> <C-W>j
map <C-k> <C-W>k
map <C-l> <C-W>l

" general configs
#syntax enable
#set showmatch
#set ts=4
#set sts=4
#set sw=4
#set autoindent
#set smartindent
#set smarttab
#set expandtab
set number relativenumber
" set spell spelllang=en_us
