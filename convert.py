def ft_m(ft):       return ft*0.3048
def m_ft(m):        return m/0.3048

def in_cm(in_):     return in_*2.54
def cm_in(cm):      return cm/2.54

def F_C(F):         return (F - 32)/1.8
def C_F(C):         return (C*1.8) + 32


def N_lbf(N):       return N*0.2248089431
def lbf_N(lbf):     return lbf/0.2248089431

def kg_lb(kg):      return kg*2.20462262
def lb_kg(lb):      return lb/2.20462262

def psi_kpa(psi):   return psi*6.89475729
def kpa_psi(kpa):   return kpa/6.89475729

ft, m = ft_m(1), m_ft(1)
ft2, ft3 = ft_m(1)**2, ft_m(1)**3
lbf, N = lbf_N(1), N_lbf(1)
lb, kg = lb_kg(1), kg_lb(1)
psi, kpa = psi_kpa(1), kpa_psi(1)

# CONVERT
'''
print( 200 * psi )
print( 100 * lbf )
print( 244 * lbf / lb )
print( 0.293 * lb ) # print( 444.82216152547716 / 2392.82259799032 * 2.5 / 3.5 )
print( 0.117 * lb )
'''
#print( 44.5 * lb / ft3 )
#print( F_C(68) )
'''
print( round( F_C( 6000 ), 3) )
print( round( F_C( 5000 ), 3) )
print( round( F_C( 4000 ), 3) )
print( round( F_C( 3000 ), 3) )
print( round( F_C( 2000 ), 3) )
'''