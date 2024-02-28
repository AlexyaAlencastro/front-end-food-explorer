import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
		--toastify-color-light: ${({ theme }) => theme.COLORS.DARK_900};
		--toastify-text-color-light: ${({ theme }) => theme.COLORS.LIGHT_100};
		--toastify-toast-min-height: 4.8rem;
		--toastify-color-progress-light: linear-gradient(
			to right,
			${({ theme }) => theme.COLORS.DARK_1000},
			${({ theme }) => theme.COLORS.LIGHT_700}
		);
    }

	#root {
		min-height: 100vh;
	}
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
		margin: 0;
		min-height: 100vh;
		font-size: 1.6rem;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        -webkit-font-smoothing: antialiased;
        min-width: 360px;
    }

    .loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        height: 100vh;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font: ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
    }

	.Toastify__toast-container {
		top: 11rem;
		right: 2.3rem;
	}

	.Toastify__close-button {
		color: ${({ theme }) => theme.COLORS.LIGHT_100};
	}

	.Toastify__toast-body {
		text-align: center;
	}

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    #root {
        height: 100%;
    }

    ::-webkit-scrollbar {
        width: 1rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: 0.5rem;
    }

    * {
        scrollbar-color: ${({ theme }) => theme.COLORS.DARK_1000} transparent;
    }

    *::-moz-scrollbar-thumb {
        background-color: red;
        border-radius: 0.5rem;
    }

    ::-ms-scrollbar {
        width: 0.5rem;
    }

    ::-ms-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.DARK_1000};
        border-radius: 0.5rem;
    }

	@keyframes topToDown {
  		from {
    		opacity: 0;
			transform: translateY(-2rem);
  		}
  		to {
    		opacity: 1;
			transform: translateY(0rem);
  		}
	}

	@keyframes downToTop {
  		from {
    		opacity: 0;
			transform: translateY(2rem);
  		}
  		to {
    		opacity: 1;
			transform: translateY(0rem);
  		}
	}

	@keyframes leftToRight {
  		from {
    		opacity: 0;
			transform: translateX(-2rem);
  		}
  		to {
    		opacity: 1;
			transform: translateX(0rem);
  		}
	}

	@keyframes rightToLeft {
  		from {
    		opacity: 0;
			transform: translateX(2rem);
  		}
  		to {
    		opacity: 1;
			transform: translateX(0rem);
  		}
	}

	#circular3dG {
		position:relative;
		width:58px;
		height:58px;
		margin:auto;
	}

	.circular3dG {
		position:absolute;
		background-color:rgba(6,94,124,0.98);
		width:17px;
		height:17px;
		border-radius:18px;
			-o-border-radius:18px;
			-ms-border-radius:18px;
			-webkit-border-radius:18px;
			-moz-border-radius:18px;
		animation-name:bounce_circular3dG;
			-o-animation-name:bounce_circular3dG;
			-ms-animation-name:bounce_circular3dG;
			-webkit-animation-name:bounce_circular3dG;
			-moz-animation-name:bounce_circular3dG;
		animation-duration:1.2s;
			-o-animation-duration:1.2s;
			-ms-animation-duration:1.2s;
			-webkit-animation-duration:1.2s;
			-moz-animation-duration:1.2s;
		animation-iteration-count:infinite;
			-o-animation-iteration-count:infinite;
			-ms-animation-iteration-count:infinite;
			-webkit-animation-iteration-count:infinite;
			-moz-animation-iteration-count:infinite;
		animation-direction:normal;
			-o-animation-direction:normal;
			-ms-animation-direction:normal;
			-webkit-animation-direction:normal;
			-moz-animation-direction:normal;
	}

	#circular3d_1G{
		left:23px;
		top:4px;
		animation-delay:0.45s;
			-o-animation-delay:0.45s;
			-ms-animation-delay:0.45s;
			-webkit-animation-delay:0.45s;
			-moz-animation-delay:0.45s;
	}

	#circular3d_2G{
		left:36px;
		top:14px;
		animation-delay:0.6s;
			-o-animation-delay:0.6s;
			-ms-animation-delay:0.6s;
			-webkit-animation-delay:0.6s;
			-moz-animation-delay:0.6s;
	}

	#circular3d_3G{
		left:43px;
		top:26px;
		animation-delay:0.75s;
			-o-animation-delay:0.75s;
			-ms-animation-delay:0.75s;
			-webkit-animation-delay:0.75s;
			-moz-animation-delay:0.75s;
	}

	#circular3d_4G{
		left:40px;
		top:39px;
		animation-delay:0.9s;
			-o-animation-delay:0.9s;
			-ms-animation-delay:0.9s;
			-webkit-animation-delay:0.9s;
			-moz-animation-delay:0.9s;
	}

	#circular3d_5G{
		left:24px;
		top:43px;
		animation-delay:1.05s;
			-o-animation-delay:1.05s;
			-ms-animation-delay:1.05s;
			-webkit-animation-delay:1.05s;
			-moz-animation-delay:1.05s;
	}

	#circular3d_6G{
		left:5px;
		top:28px;
		animation-delay:1.2s;
			-o-animation-delay:1.2s;
			-ms-animation-delay:1.2s;
			-webkit-animation-delay:1.2s;
			-moz-animation-delay:1.2s;
	}

	#circular3d_7G{
		left:0px;
		top:8px;
		animation-delay:1.35s;
			-o-animation-delay:1.35s;
			-ms-animation-delay:1.35s;
			-webkit-animation-delay:1.35s;
			-moz-animation-delay:1.35s;
	}

	#circular3d_8G{
		left:10px;
		top:0px;
		animation-delay:1.5s;
			-o-animation-delay:1.5s;
			-ms-animation-delay:1.5s;
			-webkit-animation-delay:1.5s;
			-moz-animation-delay:1.5s;
	}

	@keyframes bounce_circular3dG{
		0%{
		transform:scale(1)
		}

		100%{
		transform:scale(.3)
		}
	}

	@-o-keyframes bounce_circular3dG{
		0%{
		-o-transform:scale(1)
		}

		100%{
		-o-transform:scale(.3)
		}
	}

	@-ms-keyframes bounce_circular3dG{
		0%{
		-ms-transform:scale(1)
		}

		100%{
		-ms-transform:scale(.3)
		}
	}

	@-webkit-keyframes bounce_circular3dG{
		0%{
		-webkit-transform:scale(1)
		}

		100%{
		-webkit-transform:scale(.3)
		}
	}

	@-moz-keyframes bounce_circular3dG{
		0%{
		-moz-transform:scale(1)
		}

		100%{
		-moz-transform:scale(.3)
		}
	}
`;