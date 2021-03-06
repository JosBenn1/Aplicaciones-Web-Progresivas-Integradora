  f o r   s e r v i c i n g ,   n e e d s   a   r e m o u n t ,   o r   i s   a n   i n v a l i d   i m a g e .   
 
         E x a m p l e :   
             D I S M . e x e   / G e t - M o u n t e d W i m I n f o   
 
 
 C o m m i t - W i m % S a v e s   c h a n g e s   t o   a   m o u n t e d   W I M   i m a g e . 
 / C o m m i t - W i m   / M o u n t D i r : < t a r g e t _ m o u n t _ d i r e c t o r y >   [ / E A ] 
 
     A p p l i e s   c h a n g e s   t o   t h e   m o u n t e d   i m a g e .   T h e   i m a g e   r e m a i n s   m o u n t e d   u n t i l   t h e   
     / U n m o u n t - W i m   o p t i o n   i s   u s e d .   
     U s e   / E A   t o   s a v e   e x t e n d e d   a t t r i b u t e s .   
 
         E x a m p l e :   
             D I S M . e x e   / C o m m i t - W i m   / M o u n t D i r : C : \ t e s t \ o f f l i n e   
 
  R e m o u n t - W i m ) R e c o v e r s   a n   o r p h a n e d   W I M   m o u n t   d i r e c t o r y . ? 
 / R e m o u n t - W i m   / M o u n t D i r : < t a r g e t _ m o u n t _ d i r e c t o r y >   
 
     R e c o v e r s   a n   o r p h a n e d   W I M   m o u n t   d i r e c t o r y .   
 
         E x a m p l e :   
             D I S M . e x e   / R e m o u n t - W i m   / M o u n t D i r : C : \ t e s t \ o f f l i n e   
 
  C l e a n u p - W i m e D e l e t e s   r e s o u r c e s   a s s o c i a t e d   w i t h   m o u n t e d   W I M   
                                                         i m a g e s   t h a t   a r e   c o r r u p t e d . 

 / C l e a n u p - W i m   
 
     D e l e t e s   r e s o u r c e s   a s s o c i a t e d   w i t h   a   c o r r u p t e d   m o u n t e d   i m a g e .   
     T h i s   c o m m a n d   d o e s   n o t   u n m o u n t   a   m o u n t e d   i m a g e ;   i t   a l s o   d o e s   n o t   d e l e t e   
     i m a g e s   t h a t   c a n   b e   r e c o v e r e d   b y   u s i n g   t h e   / R e m o u n t - W I M   c o m m a n d .   
 
         E x a m p l e :   
             D I S M . e x e   / C l e a n u p - W i m   
 
        C a p t u r e - I m a g e ? C a p t u r e s   a n   i m a g e   o f   a   d r i v e   i n t o   a   n e w   W I M   f i l e . 
                                                         C a p t u r e d   d i r e c t o r i e s   i n c l u d e   a l l   s u b f o l d e r s   a n d   
                                                         d a t a . c
 / C a p t u r e - I m a g e   / I m a g e F i l e : < p a t h _ t o _ i m a g e _ f i l e >   / C a p t u r e D i r : < s o u r c e _ d i r e c t o r y >   
     / N a m e : < N a m e > 
     [ / D e s c r i p t i o n : D e s c r i p t i o n ]   [ / C o n f i g F i l e : < w i m s c r i p t . i n i > ]   
     { [ / C o m p r e s s : { f a s t | m a x | n o n e } ]   [ / B o o t a b l e ]   |   [ / W I M B o o t ] }   [ / C h e c k I n t e g r i t y ]   
     [ / V e r i f y ]   [ / N o R p F i x ]   [ / E A ] 
 
     C a p t u r e s   a n   i m a g e   o f   a   d r i v e   t o   a   n e w   W I M   f i l e .   C a p t u r e d   d i r e c t o r i e s   i n c l u d e   
     a l l   s u b f o l d e r s   a n d   d a t a .   Y o u   c a n n o t   c a p t u r e   a n   e m p t y   d i r e c t o r y .   
     U s e   / C o n f i g F i l e   t o   s p e c i f y   t h e   l o c a t i o n   o f   a   c o n f i g u r a t i o n   f i l e   t h a t   l i s t s   
     e x c l u s i o n s   f o r   i m a g e   c a p t u r e   a n d   c o m p r e s s   c o m m a n d s .   
     U s e   / C o m p r e s s   t o   s p e c i f y   t h e   t y p e   o f   c o m p r e s s i o n   u s e d   f o r   t h e   i n i t i a l   c a p t u r e 
     o p e r a t i o n .   
     U s e   / B o o t a b l e   t o   m a r k   a   W i n d o w s   P E   v o l u m e   i m a g e   a s   a b l e   t o   b e   b o o t e d .   
     U s e   / W I M B o o t   t o   c a p t u r e   t h e   i m a g e   t h a t   c a n   b e   a p p l i e d   w i t h   W I M B o o t   
     c o n f i g u r a t i o n .   
     U s e   / C h e c k I n t e g r i t y   t o   d e t e c t   a n d   t r a c k   W I M   f i l e   c o r r u p t i o n .   
     U s e   / V e r i f y   t o   c h e c k   f o r   e r r o r s   a n d   f i l e   d u p l i c a t i o n .   
     U s e   / N o R p F i x   t o   d i s a b l e   t h e   r e p a r s e   p o i n t   t a g   f i x .   
     U s e   / E A   t o   c a p t u r e   e x t e n d e d   a t t r i b u t e s .   
 
         E x a m p l e :   
             D I S M . e x e   / C a p t u r e - I m a g e   / I m a g e F i l e : i n s t a l l . w i m   / C a p t u r e D i r : D : \   
                 / N a m e : D r i v e - D   
 
  A p p e n d - I m a g e ! A d d s   a n o t h e r   i m a g e   t o   a   W I M   f i l e . b
 / A p p e n d - I m a g e   / I m a g e F i l e : < p a t h _ t o _ i m a g e _ f i l e >   / C a p t u r e D i r : < s o u r c e _ d i r e c t o r y >   
     / N a m e : < N a m e > 
     [ / D e s c r i p t i o n : D e s c r i p t i o n ]   [ / C o n f i g F i l e : < w i m s c r i p t . i n i > ]   
     { [ / B o o t a b l e ]   |   [ / W I M B o o t ] }   [ / C h e c k I n t e g r i t y ]   [ / V e r i f y ]   [ / N o R p F i x ]   [ / E A ] 
 
     A d d s   a n o t h e r   i m a g e   t o   a   W I M   f i l e .   
     U s e   / C o n f i g F i l e   t o   s p e c i f y   t h e   l o c a t i o n   o f   a   c o n f i g u r a t i o n   f i l e   t h a t   l i s t s   
     e x c l u s i o n s   f o r   i m a g e   c a p t u r e   a n d   c o m p r e s s   c o m m a n d s .   
     U s e   / B o o t a b l e   t o   m a r k   a   W i n d o w s   P E   v o l u m e   i m a g e   a s   a b l e   t o   b e   b o o t e d .   
     U s e   / W I M B o o t   t o  