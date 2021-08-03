VERSION 5.00
Begin VB.Form Form1 
   Appearance      =   0  'Flat
   BackColor       =   &H00000000&
   BorderStyle     =   3  'Fixed Dialog
   Caption         =   "·Å´óMandelbrotSet"
   ClientHeight    =   9285
   ClientLeft      =   45
   ClientTop       =   390
   ClientWidth     =   14595
   Icon            =   "Form1.frx":0000
   LinkTopic       =   "Form1"
   MaxButton       =   0   'False
   MinButton       =   0   'False
   ScaleHeight     =   9285
   ScaleWidth      =   14595
   StartUpPosition =   2  'ÆÁÄ»ÖÐÐÄ
   Begin VB.PictureBox Picture3 
      Appearance      =   0  'Flat
      AutoRedraw      =   -1  'True
      BackColor       =   &H00000000&
      DrawWidth       =   2
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   7.5
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H80000008&
      Height          =   8880
      Left            =   11880
      ScaleHeight     =   8850
      ScaleWidth      =   2490
      TabIndex        =   21
      Top             =   240
      Width           =   2520
   End
   Begin VB.PictureBox Picture2 
      Appearance      =   0  'Flat
      AutoRedraw      =   -1  'True
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   7.5
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   8880
      Left            =   9240
      ScaleHeight     =   8850
      ScaleWidth      =   2490
      TabIndex        =   19
      Top             =   240
      Width           =   2520
   End
   Begin VB.TextBox Text18 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   120
      TabIndex        =   18
      Top             =   8760
      Width           =   9015
   End
   Begin VB.TextBox Text17 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   120
      Locked          =   -1  'True
      TabIndex        =   17
      Text            =   "²ÉFX¾«¶È"
      Top             =   7320
      Width           =   855
   End
   Begin VB.TextBox Text16 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   960
      TabIndex        =   16
      Top             =   7320
      Width           =   3135
   End
   Begin VB.TextBox Text15 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   120
      Locked          =   -1  'True
      TabIndex        =   15
      Text            =   "·Å´ó´ÎÊý"
      Top             =   8280
      Width           =   855
   End
   Begin VB.TextBox Text14 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   960
      TabIndex        =   14
      Text            =   "0"
      Top             =   8280
      Width           =   3135
   End
   Begin VB.TextBox Text13 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   4200
      Locked          =   -1  'True
      TabIndex        =   13
      Text            =   "Y-DOW"
      Top             =   8280
      Width           =   735
   End
   Begin VB.TextBox Text12 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   4920
      TabIndex        =   12
      Text            =   "0.01"
      Top             =   8280
      Width           =   4215
   End
   Begin VB.TextBox Text11 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   4200
      Locked          =   -1  'True
      TabIndex        =   11
      Text            =   "Y-UPER"
      Top             =   7800
      Width           =   735
   End
   Begin VB.TextBox Text10 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   4920
      TabIndex        =   10
      Text            =   "0.01"
      Top             =   7800
      Width           =   4215
   End
   Begin VB.TextBox Text9 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   4200
      Locked          =   -1  'True
      TabIndex        =   9
      Text            =   "X-RIGT"
      Top             =   7320
      Width           =   735
   End
   Begin VB.TextBox Text8 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   4920
      TabIndex        =   8
      Text            =   "0.01"
      Top             =   7320
      Width           =   4215
   End
   Begin VB.TextBox Text7 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   4200
      Locked          =   -1  'True
      TabIndex        =   7
      Text            =   "X-LEFT"
      Top             =   6840
      Width           =   735
   End
   Begin VB.TextBox Text6 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   4920
      TabIndex        =   6
      Text            =   "0.01"
      Top             =   6840
      Width           =   4215
   End
   Begin VB.TextBox Text5 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   960
      TabIndex        =   5
      Text            =   "230"
      Top             =   7800
      Width           =   3135
   End
   Begin VB.TextBox Text4 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   120
      Locked          =   -1  'True
      TabIndex        =   4
      Text            =   "µü´úÉî¶È"
      Top             =   7800
      Width           =   855
   End
   Begin VB.TextBox Text3 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   375
      Left            =   960
      TabIndex        =   3
      Text            =   "0.0080"
      Top             =   6840
      Width           =   3135
   End
   Begin VB.TextBox Text2 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H00FFFFFF&
      Height          =   375
      Left            =   120
      Locked          =   -1  'True
      TabIndex        =   2
      Text            =   "²ÉFY¾«¶È"
      Top             =   6840
      Width           =   855
   End
   Begin VB.TextBox Text1 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      BeginProperty Font 
         Name            =   "Î¢ÈíÑÅºÚ"
         Size            =   9
         Charset         =   134
         Weight          =   400
         Underline       =   0   'False
         Italic          =   0   'False
         Strikethrough   =   0   'False
      EndProperty
      ForeColor       =   &H0000FF00&
      Height          =   390
      Left            =   120
      TabIndex        =   1
      Top             =   6360
      Width           =   9015
   End
   Begin VB.PictureBox Picture1 
      Appearance      =   0  'Flat
      BackColor       =   &H00000000&
      DrawWidth       =   2
      ForeColor       =   &H80000008&
      Height          =   6000
      Left            =   120
      ScaleHeight     =   5970
      ScaleWidth      =   8970
      TabIndex        =   0
      Top             =   240
      Width           =   9000
      Begin VB.Label Label1 
         AutoSize        =   -1  'True
         BackStyle       =   0  'Transparent
         Caption         =   "PRESS TO START"
         BeginProperty Font 
            Name            =   "Î¢ÈíÑÅºÚ"
            Size            =   21.75
            Charset         =   134
            Weight          =   400
            Underline       =   0   'False
            Italic          =   0   'False
            Strikethrough   =   0   'False
         EndProperty
         ForeColor       =   &H00E0E0E0&
         Height          =   570
         Left            =   2520
         TabIndex        =   20
         Top             =   2520
         Width           =   3540
      End
   End
End
Attribute VB_Name = "Form1"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = False
Private Const SWP_NOSIZE = &H1
Private Const SWP_NOMOVE = &H2
Private Const HWND_TOPMOST = -1
Private Const HWND_NOTOPMOST = -2
Private Declare Function SetWindowPos Lib "user32" (ByVal hWnd As Long, ByVal hWndInsertAfter As Long, ByVal X As Long, ByVal Y As Long, ByVal cx As Long, ByVal cy As Long, ByVal wFlags As Long) As Long

Dim X As Single, Y As Single
Dim sa As Single, sb As Single, da As Single, db As Single, t1 As Single, jd2 As Single
Public bl As Single '·Å´ó±ÈÂÊ
Public w As Double
Public h As Double
Public widthf As Double
Public heightf As Double
Public jd As Double
Public maxa As Double
Public maxb As Double
Public ca As Double
Public cb As Double
Public FDCS As Integer
Public loader As Double
Public jdw As Double
Public REPETS As Integer, saa As Double, sbb As Double
Dim slTemp As Single
Dim ISOUT As Boolean
Function htrR(h As Single, S As Single, V As Single) As Integer
Dim c As Single, X As Single, M As Single, ri As Single, gi As Single, bi As Single
c = V * S
X = c * (1 - Abs((h / 60) Mod 2 - 1))
M = V - c
If h < 60 And h >= 0 Then
    ri = c
    gi = X
    bi = 0
ElseIf h < 120 And h >= 60 Then
    ri = X
    gi = c
    bi = 0
ElseIf h < 180 And h >= 120 Then
    ri = 0
    gi = c
    bi = X
ElseIf h < 240 And h >= 180 Then
    ri = 0
    gi = X
    bi = c
ElseIf h < 300 And h >= 240 Then
    ri = X
    gi = 0
    bi = c
Else
    ri = c
    gi = 0
    bi = X
End If
htrR = Int((ri + M) * 255)
End Function
Function htrG(h As Single, S As Single, V As Single) As Integer
Dim c As Single, X As Single, M As Single, ri As Single, gi As Single, bi As Single
c = V * S
X = c * (1 - Abs((h / 60) Mod 2 - 1))
M = V - c
If h < 60 And h >= 0 Then
    ri = c
    gi = X
    bi = 0
ElseIf h < 120 And h >= 60 Then
    ri = X
    gi = c
    bi = 0
ElseIf h < 180 And h >= 120 Then
    ri = 0
    gi = c
    bi = X
ElseIf h < 240 And h >= 180 Then
    ri = 0
    gi = X
    bi = c
ElseIf h < 300 And h >= 240 Then
    ri = X
    gi = 0
    bi = c
Else
    ri = c
    gi = 0
    bi = X
End If
htrG = Int((gi + M) * 255)
End Function
Function htrB(h As Single, S As Single, V As Single) As Integer
Dim c As Single, X As Single, M As Single, ri As Single, gi As Single, bi As Single
c = V * S
X = c * (1 - Abs((h / 60) Mod 2 - 1))
M = V - c
If h < 60 And h >= 0 Then
    ri = c
    gi = X
    bi = 0
ElseIf h < 120 And h >= 60 Then
    ri = X
    gi = c
    bi = 0
ElseIf h < 180 And h >= 120 Then
    ri = 0
    gi = c
    bi = X
ElseIf h < 240 And h >= 180 Then
    ri = 0
    gi = X
    bi = c
ElseIf h < 300 And h >= 240 Then
    ri = X
    gi = 0
    bi = c
Else
    ri = c
    gi = 0
    bi = X
End If
htrB = Int((bi + M) * 255)
End Function

Private Sub Form_Load()
loader = 200
Picture1.Scale (-2, 1)-(1, -1)
widthf = 3
heightf = 2
jd = Val(Text3.Text)
bl = 0.5
FDCS = 0
SetWindowPos hWnd, HWND_TOPMOST, 0, 0, 0, 0, SWP_NOMOVE Or SWP_NOSIZE
End Sub

Private Sub Label1_Click()
        Text1.Text = "mouseX=" + CStr(X) + ";mouseY=" + CStr(Y)
        Picture1.Cls
        w = widthf * bl
        h = heightf * bl
        FDCS = FDCS + 1
        Text14.Text = CStr(FDCS)
        Picture1.Scale (X - w / 2, Y + h / 2)-(X + w / 2, Y - h / 2)
        jd = jd * bl
        jdw = jd * 2 / 3
        Text16.Text = CStr(jdw)
        maxa = X + w / 2: maxb = Y + h / 2: jd2 = Val(Text5.Text)
        ca = X - w / 2: cb = Y - h / 2: t1 = X - w / 2
        widthf = w
        heightf = h
        Text6.Text = CStr(X - w / 2)
        Text8.Text = CStr(X + w / 2)
        Text10.Text = CStr(Y + h / 2)
        Text12.Text = CStr(Y - h / 2)
        Do While cb < maxb
            Do While ca < maxa
                ca = ca + jdw
                REPETS = 0
                sa = 0: sb = 0
                Do While REPETS <= jd2 And Sqr(sa ^ 2 + sb ^ 2) <= 2
                    saa = sa ^ 2 - sb ^ 2 + ca
                    sbb = 2 * sa * sb + cb
                    sa = saa
                    sb = sbb
                    REPETS = REPETS + 1
                Loop
                If REPETS >= jd2 - 1 Then Picture1.PSet (ca, cb), RGB(0, 0, 0) Else Picture1.PSet (ca, cb), RGB(Sin(REPETS / 4) * 120 + 120, Sin(REPETS / 3) * 120 + 120, Sin(REPETS / 2) * 120 + 120)
            Loop
            ca = t1
            cb = cb + jd
        Loop
        Text3.Text = CStr(jd)
Label1.Visible = False
End Sub

Private Sub Picture1_MouseMove(Button As Integer, Shift As Integer, X As Single, Y As Single)
Picture2.Cls
Picture3.Cls
Text1.Text = "mouseX=" + CStr(X) + ";mouseY=" + CStr(Y)
Picture2.Scale (-2.4, 0)-(2.4, Val(Text5.Text))
Picture3.Scale (-3, 0)-(3, Val(Text5.Text))
Picture3.DrawWidth = 1
For i = 0 To Val(Text5.Text) + 20 Step 10
    Picture2.Line (-2.5, i)-(-2.2, i), RGB(180, 180, 180)
    Picture2.Print Str(i)
    Picture2.Line (2.2, i)-(2.5, i), RGB(180, 180, 180)
    Picture3.Line (-2.5, i)-(-2.2, i), RGB(180, 180, 180)
    Picture3.Line (2.2, i)-(2.5, i), RGB(180, 180, 180)
Next i
Picture3.DrawWidth = 2
cb = Y
ca = X
REPETS = 0
sa = 0: sb = 0
ISOUT = False
Do While REPETS <= Val(Text5.Text) - 1
    saa = sa ^ 2 - sb ^ 2 + ca
    sbb = 2 * sa * sb + cb
    sa = saa
    sb = sbb
    REPETS = REPETS + 1
    On Error GoTo mse
    If REPETS = 1 Then
        slTemp = Sqr(sa ^ 2 + sb ^ 2)
    Else
        Picture2.Line (Sqr(sa ^ 2 + sb ^ 2), REPETS)-(slTemp, REPETS - 1), RGB(Sin(REPETS / 4) * 120 + 120, Sin(REPETS / 3) * 120 + 120, Sin(REPETS / 2) * 120 + 120)
        slTemp = Sqr(sa ^ 2 + sb ^ 2)
        If Sqr(sa ^ 2 + sb ^ 2) > 2 And ISOUT = False Then
            Picture2.Line (-2.5, REPETS)-(2.5, REPETS), RGB(120, 120, 120)
            Picture2.Line (-2.5, REPETS - 3)-(-2.2, REPETS), RGB(200, 200, 200)
            Picture2.Line (-2.5, REPETS + 3)-(-2.2, REPETS), RGB(200, 200, 200)
            Picture2.Print ("      >break point:" + Str(REPETS))
            ISOUT = True
        End If
    End If
        Picture3.PSet (sa, sb + REPETS), RGB(Sin(REPETS / 4) * 120 + 120, Sin(REPETS / 3) * 120 + 120, Sin(REPETS / 2) * 120 + 120)
Loop
mse:
End Sub

Private Sub Picture1_MouseUp(Button As Integer, Shift As Integer, X As Single, Y As Single)
Label1.Visible = False
Dim sda As Double, sdb As Double
Dim z As Double, dz As Double, result As Double
If Button = 1 Then
    If FDCS <= 15 Then
        Text1.Text = "mouseX=" + CStr(X) + ";mouseY=" + CStr(Y)
        Picture1.Cls
        w = widthf * bl
        h = heightf * bl
        FDCS = FDCS + 1
        Text14.Text = CStr(FDCS)
        Picture1.Scale (X - w / 2, Y + h / 2)-(X + w / 2, Y - h / 2)
        jd = jd * bl
        jdw = jd * 2 / 3
        Text16.Text = CStr(jdw)
        maxa = X + w / 2: maxb = Y + h / 2: jd2 = Val(Text5.Text)
        ca = X - w / 2: cb = Y - h / 2: t1 = X - w / 2
        widthf = w
        heightf = h
        Text6.Text = CStr(X - w / 2)
        Text8.Text = CStr(X + w / 2)
        Text10.Text = CStr(Y + h / 2)
        Text12.Text = CStr(Y - h / 2)
        Do While cb < maxb
            Do While ca < maxa
                ca = ca + jdw
                REPETS = 0
                sa = 0: sb = 0
                da = 0: db = 0
                Do While REPETS <= jd2 And Sqr(sa ^ 2 + sb ^ 2) <= 2
                    saa = sa ^ 2 - sb ^ 2 + ca
                    sbb = 2 * sa * sb + cb
                    sa = saa
                    sb = sbb
                    sda = 2 * sa * da - 2 * sb * db + 1
                    sdb = 2 * sa * db + 2 * sb * da
                    da = sda
                    db = sdb
                    REPETS = REPETS + 1
                Loop
                z = Sqr(sa ^ 2 + sb ^ 2)
                dz = Sqr(da ^ 2 + db ^ 2)
                result = Log(z * z) * z / dz
                
                Dim r As Integer, g As Integer, b As Integer
                Dim HH As Single, SS As Single, VV As Single
                HH = (REPETS / jd2) * 160
                SS = REPETS / jd2
                VV = (Sin(Log(Abs(result))) + 1) / 2
                
                r = htrR(HH, SS, VV)
                g = htrG(HH, SS, VV)
                b = htrB(HH, SS, VV)
                
            If REPETS < jd2 - 2 Then Picture1.PSet (ca, cb), RGB(r, g, b) Else Picture1.PSet (ca, cb), RGB(0, 0, 0)
            Loop
            ca = t1
            cb = cb + jd
        Loop
        Text3.Text = CStr(jd)
    End If
ElseIf Button = 2 Then
    If FDCS >= 0 Then
        Text1.Text = "mouseX=" + CStr(X) + ";mouseY=" + CStr(Y)
        Picture1.Cls
        w = widthf / bl
        h = heightf / bl
        FDCS = FDCS - 1
        Text14.Text = CStr(FDCS)
        Picture1.Scale (X - w / 2, Y + h / 2)-(X + w / 2, Y - h / 2)
        jd = jd / bl
        jdw = jd * 2 / 3
        Text16.Text = CStr(jdw)
        maxa = X + w / 2: maxb = Y + h / 2: jd2 = Val(Text5.Text)
        ca = X - w / 2: cb = Y - h / 2: t1 = X - w / 2
        widthf = w
        heightf = h
        Text6.Text = CStr(X - w / 2)
        Text8.Text = CStr(X + w / 2)
        Text10.Text = CStr(Y + h / 2)
        Text12.Text = CStr(Y - h / 2)
        Do While cb < maxb
            Do While ca < maxa
                ca = ca + jdw
                REPETS = 0
                sa = 0: sb = 0
                Do While REPETS <= jd2 And Sqr(sa ^ 2 + sb ^ 2) <= 2
                    saa = sa ^ 2 - sb ^ 2 + ca
                    sbb = 2 * sa * sb + cb
                    sa = saa
                    sb = sbb
                    REPETS = REPETS + 1
                Loop
                If REPETS >= jd2 - 1 Then Picture1.PSet (ca, cb), RGB(0, 0, 0) Else Picture1.PSet (ca, cb), RGB(Sin(REPETS / 5) * 120 + 120, Sin(REPETS / 3) * 120 + 120, Sin(REPETS / 2) * 120 + 120)
            Loop
            ca = t1
            cb = cb + jd
        Loop
        Text3.Text = CStr(jd)
    End If
End If
Text18.Text = Text6.Text + "/" + Text8.Text + "/" + Text10.Text + "/" + Text12.Text
End Sub

